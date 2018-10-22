BEGIN{FS=":";}
     
      $1 ~/"_id"/{

          gsub(" ","",$1);
          gsub(" ","",$2);
          id = $2;
          }
     $1 ~/"titulo"/{
           gsub(" ","",$1);
           titulo = $2;
     }

     $1 ~/"tipo"/{
          tipo = $1;
          array[$2][id]=titulo;

     }

    

END{
     print "[";
     y=0;
     for(i in array){
          print "{"
          print "\"tipo\":" i;
          print "\"musicas\":"
          print "["
          x=0;
               for(j in array[i]){
       
                 print "{"
                 print "\"_id\":" j;
                 gsub("\,","",array[i][j])
                 print "\"titulo\":" array[i][j];
                  if(x<length(array[i])-1){ print "},"}
                  else  print "}"
               x++;
               }
     print "]"
     if(y<length(array)-1){print "},"}
     else  print "}"
     y++;
     }
     print "]";
}