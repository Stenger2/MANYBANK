+function () {
   

    document.querySelectorAll('.accordion-item').forEach(function(section){
        section.addEventListener('click',function(e){
           

            document.querySelectorAll('.accordion-item').forEach(function(section){
                section.classList.remove('opened')
            })
            e.target.closest('.accordion-item').classList.add('opened')
        })
    })
}()