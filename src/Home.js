const Home=()=>
    {
        const tenlop="Xin chào 221521";
    
        const vieccanlam1=['Viec 1', 'Viec 2', 'Viec 3', 'Viec 4'];

        const Themsinhvien=()=>
            {
                console.log("Test them sinh vien");
                const sinhvienmoi={id:5,hoten:"Cherry Nguyen", lop:"221521" };
                array2=[...array2, sinhvienmoi];
            }

        const Suasinhvien=id=>
        {
            array2.map(phantu=>{
                
                if (phantu.id===id)
                {
                    console.log("Sua phan tu:"+phantu.id+", ten:"+phantu.hoten);
                    phantu.hoten="Edited "+phantu.hoten;
                }
                return phantu;

            });
        }
    
        var array2=[{id:1,hoten:"Nguyễn Văn A", lop:"221521" },
             {id:2,hoten:"Nguyễn Văn Bình", lop:"221521" },
             {id:3,hoten:"Nguyễn Văn Cường", lop:"221521" },
            {id:4,hoten:"Trần Thị D", lop:"221521" }];
            //Themsinhvien();
        
    
        
        
    
        return (
            <div>
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
                            <span>ID:</span>
                            <span>&nbsp;{phantu.id}</span>                            
                            <span>&nbsp;&nbsp;,Họ tên:</span>
                            <span>&nbsp;{phantu.hoten}</span>                            
                            <span>&nbsp;&nbsp;, Lớp:</span>
                            <span>&nbsp;{phantu.lop}</span>

                            <span><input value="Sửa sv" type="button" onClick={Suasinhvien.bind(this, phantu.id)}/>  </span>
                            </p>
                            <hr></hr>
                        </p>)
                    }

                    )
                 }

                 <p style={{paddingTop:20}}>
                    <input type="button" value="Thêm sinh viên" onClick={Themsinhvien.bind(this)} style={{backgroundColor:"ThreeDFace", padding:10}}/>
                 </p>
    
            </div>
    
        );
    }
    
    
    
    export default Home;
