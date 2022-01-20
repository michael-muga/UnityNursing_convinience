function validation(){
    let formName=document.getElementById('name').value;
    let formExperience=document.getElementById('experience').value;
    let formLevel=document.getElementById('level').value;
    let formCourse=document.getElementById('course').value;
    let formPhone=document.getElementById('phone').value;

    if(formName=='' || formExperience==''|| formLevel=='' || formCourse=='' || formPhone==''){
        swal({
            title:"Empty Fields!",
            text:"Please fill all the Fields!",
            icon:"warning",
            button:"OK",
        });
        document.getElementById("form").reset();
    }else{
        swal({
            title: "Thank you "+formName+" ! We have received your application!",
            text:"We will get in touch with you within 2 weeks.",
            icon:"success",
            button:"OK",
        });
        setTimeout(function() { // TImeout setup
            window.location.href = "recruitment.html";
        }, 5000); // 5000 milliseconds = 5seconds
        
    }
}