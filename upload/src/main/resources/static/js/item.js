const target1 = document.getElementById("save");

let index ={

    init:function(){
        target1.addEventListener("click",()=>{
            this.save();
            })
    },

    save:function(){
             var formData = new FormData(); // FormData 객체 생성
             formData.append("itemName", document.getElementById("itemName").value); // 추가 파라미터 삽입
             formData.append("file", document.getElementById("file").files[0]); // 실제 input file 데이터 삽입

             console.log(formData.get("itemName"));
             console.log(formData.get("file"));

                $.ajax({
                 type: "POST",
                 url:"/spring/upload",
                 enctype: "multipart/form-data",
                 data: formData,
                 processData: false, //프로세스 데이터 설정 : false 값을 해야 form data로 인식합니다
                 contentType: false, //헤더의 Content-Type을 설정 : false 값을 해야 form data로 인식합니다
                 }).done(function(resp){
                   alert("글쓰기가 되었습니다");
                   location.href = "/";
                   console.log(resp)
                 }).fail(function(error){
                 alert("글쓰기가 실패했습니다");
                   location.href = "/";
           //        console.log(resp)
                   console.log(JSON.stringify(error))
                 })
    }
}

    index.init();