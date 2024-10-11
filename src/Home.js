const Home=()=>
    {
        const tenlop="Xin chào 221521";
    
        const vieccanlam1=['Viec 1', 'Viec 2', 'Viec 3', 'Viec 4'];
    
        var array2=[{id:1,hoten:"Nguyễn Văn A", lop:"221406" },
                            {id:2,hoten:"Nguyễn Văn Bình", lop:"221406" },
                            {id:3,hoten:"Nguyễn Văn Cường", lop:"221406" },
                            {id:4,hoten:"Trần Thị D", lop:"221406" }];
    
        
        
    
        return (
            <body>
                <p><h1>{tenlop}</h1></p>
                {
                    //Vong lap
                    vieccanlam1.map(x=>{
                        return (
                            <p>
                              <span>{x}</span> &nbsp;&nbsp;&nbsp;
                              <input type="checkbox"/>
                            </p>
                            
    
                             
                        );
                    })
                
                 } 


                 <h2>Danh sách sinh viên</h2>
                 {
                    array2.map(phantu=>{
                        return( 
                        <p>
                            <p>
                            <span>Họ tên:</span>
                            <span>{phantu.hoten}</span>
                            </p>
                            <p>
                            <span>Lớp:</span>
                            <span>{phantu.lop}</span>
                            </p>
                            <hr></hr>
                        </p>)
                    }

                    )
                 }
    
            </body>
    
        );
    }
    
    
    
    export default Home;
