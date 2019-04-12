<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0">
    <xsl:output method="html" indent="yes"/>
    
    <xsl:template match="manifesto">
        <html>
            <head>
                <meta charset="UTF-8"/>
                <style>
                    h4 {
                    display:inline;
                    }
                    div.meta {
                    position: relative;
                    width: 100%;
                    height: 100px;
                    border: 1px solid black; 
                    } 
                    
                    div.supervisor {
                    position: absolute;
                    top: -18px;
                    right: 0;
                    width: 200px;
                    height: 100px;
                    }
                    div.equipa {
                    position: relative;
                    width: 100%;
                    height: 100px;
                    } 
                    
                    div.foto {
                    position: absolute;
                    top: -18px;
                    right: 800px;
                    width: 200px;
                    height: 100px;
                    }
                </style>
            </head>
            <body>
                <center> <h1>Manifesto</h1> </center>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    
    
    <xsl:template match="meta">
          <div class="meta">
              <xsl:apply-templates/>
          </div>
        <hr/>
    </xsl:template>
    
    <xsl:template match="identificador">
        <h4>
            Identificador:
        </h4>  
        <xsl:value-of select="."/>
    </xsl:template>
    
    <xsl:template match="titulo">
        <br/>
        <h4>
            Titulo:
        </h4>  
        <xsl:value-of select="."/>
    </xsl:template>
    <xsl:template match="subtitulo">
        <br/>
        <h4>
            Subtítulo:
        </h4>  
        <xsl:value-of select="."/>
    </xsl:template>
    
    
    <xsl:template match="dinicio">
        <br/>
        <h4>
            Data de início:
        </h4>  
        <xsl:value-of select="."/>
    </xsl:template>
    
    <xsl:template match="dfim">
        <br/>
        <h4>
            Data de finalização:
        </h4>  
        <xsl:value-of select="."/>
    </xsl:template>
    
    <xsl:template match="supervisor">
        <br/>
        <div class="supervisor">
            <h3>Supervisor:</h3>
            <xsl:apply-templates/>
        </div>
       
    </xsl:template>
    
    <xsl:template match="nome">
        <br/>
        <h4>Nome:</h4>
        <a href="{./@url}"> <xsl:value-of select="."/> </a> 
    </xsl:template>
    
    <xsl:template match="email">
        <br/>
        <h4>Email:</h4>
        <a href="mailto:{.}"> <xsl:value-of select="."/> </a> 
    </xsl:template>
    
    <xsl:template match="equipa">
        <h2>Equipa de Trabalho:</h2>
       
            <ul>
            <xsl:for-each select="membro">
                <div class="equipa">
                <li> <xsl:apply-templates/> 
                </li>
                 </div>
               
            </xsl:for-each>
            </ul>
        
        <hr/>
    </xsl:template>
    
    
    <xsl:template match="foto">
        <div class="foto">
        <img src="{./@src}" height="80" width="80"></img>
        </div>
    </xsl:template>
    
    <xsl:template match="resumo">
        <h2>Resumo:</h2>
        <div>
             <xsl:apply-templates/>
        </div>
        <hr/>
    </xsl:template>
    
    <xsl:template match="para">
        <p>
            <xsl:apply-templates/>
        </p>
    </xsl:template>
    
        <xsl:template match="b">
           
           <b><xsl:value-of select="."/></b> 
        </xsl:template>
    <xsl:template match="i">
        
        <i><xsl:value-of select="."/></i> 
    </xsl:template>
    
    <xsl:template match="ul">
        
        <ul> <xsl:apply-templates/></ul>
    </xsl:template>
    
    <xsl:template match="li">
        
        <li><xsl:value-of select="."/></li> 
    </xsl:template>
        
    <xsl:template match="resultados">
        <br/>
        <h2>Resultados:</h2>
        <div>
            <ul>
                <xsl:for-each select="resultado">
                    <li> <a href="{./@url}"> <xsl:value-of select="."/> </a>
                    </li>
                </xsl:for-each>
            </ul>
          
        </div>
       
    </xsl:template>

</xsl:stylesheet>