<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema" exclude-result-prefixes="xs" version="2.0">

    <xsl:output method="html" indent="yes"/>

    <xsl:template match="/tstmt">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <title>The Quran</title>
                    <style>
                        body{
                        background: linear-gradient(to top right, #ffffff 0%, #999966 100%);
                        
                        }
                        .a1 {
                            text-decoration: none;
                            display: inline-block;
                            padding: 8px 16px;
                        }
                        
                        .a1:hover {
                            background-color: #ddd;
                            color: black;
                        }
                        
                        .previous {
                            background-color: #f1f1f1;
                            color: black;
                        }
                        .next {
                        background-color: #f1f1f1;
                        color: black;
                        }</style>
                </head>
                <body>
                    <div>
                        <center>
                           
                            <p style="font-size:70px;">The Quran</p>
                            <table>
                                <th>
                                    <img src="../img.jpg" width="100%"/>
                                </th>
                                <th>
                                    <h3>One of a group of four religious works marked up for electronic
                                        publication from publicly available sources</h3>
                                    <p>SGML version by Jon Bosak, 1992-1994</p>
                                    <p>XML version by Jon Bosak, 1996-1998</p>
                                    <p>The XML markup and added material in this version are Copyright
                                        &#169; 1998 Jon Bosak</p>
                                    <p>Translated by M. H. Shakir</p>
                                    <p>The set of which this work is a part may freely be distributed on
                                        condition that it not be modified or altered in any way. The
                                        individual works making up the set &#8212; <i>The Old Testament, The
                                            New Testament, The Quran,</i> and <i>The Book of Mormon</i>
                                        &#8212; cannot be distributed separately without violating the terms
                                        under which the set is made available.</p>
                                    <a class="a1 next" href="preface.html">Read </a>
                                </th>
                            </table>
                           
                           
                          
                        </center>
                        <xsl:apply-templates select="preface"/>
                        <xsl:apply-templates select="suracoll"/>
                    </div>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

    <xsl:template match="preface">
        <xsl:result-document href="website/preface.html">
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <style>
                        body{
                        background: linear-gradient(to bottom right, #ffffff 0%, #999966 100%);
                        
                        }
                        .a1 {
                            text-decoration: none;
                            display: inline-block;
                            padding: 8px 16px;
                        }
                        
                        .a1:hover {
                            background-color: #ddd;
                            color: black;
                        }
                        
                        .previous {
                            background-color: #f1f1f1;
                            color: black;
                        }
                        .next {
                        background-color: #f1f1f1;
                        color: black;
                        }</style>
                </head>
                <body>
                    <center>
                        <h1>
                         <xsl:value-of select="ptitle"/>
                        </h1>
                        <div width="10px">
                        <p>
                            <xsl:value-of select="p"/>
                        </p>
                        </div>
                        <a class="a1 previous" href="index.html"> Back </a>
                        <a class="a1 next" href="indice.html">Index</a>
                    </center>     
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>

    <xsl:template match="suracoll">
        <xsl:result-document href="website/indice.html">
            <html>
                <head>
                    <meta charset="UTF-8"/>
                    <style>
                        body {
                        background: linear-gradient(to right, #ffffff 0%, #999966 100%);
                        }
                        
                        .a1 {
                        text-decoration: none;
                        display: inline-block;
                        padding: 8px 16px;
                        }
                        
                        .a1:hover {
                        background-color: #ddd;
                        color: black;
                        }
                        
                        .previous {
                        background-color: #f1f1f1;
                        color: black;
                        }
                        background-color: #f1f1f1;
                        color: black;
                        }
                    </style>
                </head>
                <body>
                        <h1>
                           Index
                        </h1>
                        <ul>
                            <xsl:apply-templates select="//sura" mode="indice">
          
                            </xsl:apply-templates>
                        </ul>
                        <a class="a1 previous" href="preface.html"> &#xAB; Preface </a>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates/>
    </xsl:template>
    
    <xsl:template match="sura" mode="indice">
        <li>
            <a href="{generate-id()}.html">
                <xsl:value-of select="bktlong"/>
            </a>
        </li>  
    </xsl:template>

    <xsl:template match="sura">
       <xsl:result-document href="website/{generate-id()}.html">
           <html>
               <head>
                   <meta charset="UTF-8"/>
                   <style>
                       body {
                       background-image: url("fundo.jpg");
                       background-size: 100%;
                       backgrou-repeat: no-repeat;
                       background-color: rgba(255, 255, 255, 0.4);
                       }
                       .a1 {
                       text-decoration: none;
                       display: inline-block;
                       padding: 8px 16px;
                       }
                       
                       .a1:hover {
                       background-color: #6b6b47;
                       color: black;
                       }
                       
                       .previous {
                       background-color: #c2c2a3;
                       color: black;
                       }
                       .next {
                       background-color: #c2c2a3;
                       color: black;
                       }</style>
               </head>
               <body>
                    <h3>
                        <xsl:value-of select="bktlong"/>
                    </h3>
                        <xsl:apply-templates/>
                       <a class="a1 previous" href="indice.html"> &#xAB; Back to index </a>
               </body>
           </html>
       </xsl:result-document>
    </xsl:template>

    <xsl:template match="v">
        <p>
          <xsl:value-of select="."/>
        </p>
     </xsl:template>
    
    <xsl:template match="bktlong">
       
    </xsl:template>
    
    <xsl:template match="bktshort">
          </xsl:template>
</xsl:stylesheet>
