(function() {
    var options = {
        "Cluj": ["Cluj-Napoca", "Dej", "Gherla","Turda"],
        "Brasov": ["Codlea", "Ghimbav", "Sercaia"],
        "Timisoara": ["Lugoj", "Sannicolau Mare", "Jimbolia", "Recas", "Faget"]
    };

    var A = document.getElementById('Judet');
    var B = document.getElementById('Orase');

    A.onchange = function() {
        //clear out Orasele
        B.length = 0;

        //get the selected value from Judet
        var judet_value = this.options[this.selectedIndex].value;

        for (var i in options[judet_value]) {

            //create option tag
            var op = document.createElement('option');

            //set its value
            op.value = options[judet_value][i];

            //set the display label
            op.text = options[judet_value][i];

            //append it to Orase
            B.appendChild(op);
        }
    };

    A.onchange();

})();