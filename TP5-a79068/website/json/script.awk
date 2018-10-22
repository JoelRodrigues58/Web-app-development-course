BEGIN{FS=":";}
     
    

      $1 ~/"_id"/{
          gsub(" ","",$1);
          gsub(" ","",$2);
          print $1 ":" $2;
          }
          
     $1 ~/"titulo"/{
           gsub(" ","",$1);
          print $1 ":" $2;
     }

     $1 ~/"tipo"/{
           gsub(" ","",$1);
          print $1 ":" $2;
     }

    

END{
        
}