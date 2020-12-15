function sendMail(contactForm){
    emailjs.send('service_xw', 'template_fm2y2gi', {
        "from_name":contactForm.name.value ,
        "from_email": contactForm.email.value ,
        "project_request" : contactForm.projectsummary.value
    })
    .then(
        function (response){
            console.log("SUCCESS", response);
            
        },
        function (error){
            console.log("FAILED", error);
        });      
        document.getElementById("sendMail").reset();
        return false;     
}

 