const jspuns = $('#design option:eq(1)');
const heartjs = $('#design option:eq(2)');
const color = $('#color');
const colorLabel = $('#color').prev();
color.hide();
colorLabel.hide();
const cornFlowerBlue = $('#color option:eq(0)');
const darkSlateGrey = $('#color option:eq(1)');
const gold = $('#color option:eq(2)');
const tomato = $('#color option:eq(3)');
const steelBlue = $('#color option:eq(4)');
const dimGrey = $('#color option:eq(5)');
$('#name').focus();
$('#other-job').hide();
$('#payment option:eq(1)').prop('selected', true);


const all = $('input[name=all]');
const framework = $('input[name=js-frameworks]');
const library = $('input[name=js-libs]');
const express = $('input[name=express]');
const node = $('input[name=node]');
const tools = $('input[name=build-tools]');
const npm = $('input[name=npm]');

let total = 0;
const cost = $('<div id="total">Your total cost is($); </div'); $('.activities').append(cost);
const totalCost = $('<div id="total"></div>'); $('.activities').append(totalCost);

const nameWarning = $('<div please enter a valid name></div>');
const emailWarning = $('<div please enter a valid email></div>');
const nameValidation = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/g;
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const creditCardValidation = /^\d{13,16}$/;
const creditCardWarning = $('<div Please enter a valid account number></div>');
const cvvValidation = /^[0-9]{3}$/;
const cvvWarning = ('<div please enter a valid three digit cvv number></div>');
const zipCodeValidation = /^\d{5}$/;
const zipWarning = ('<div please enter a valid five digit zip code></div>');
 
const noCheckbox = $('<div There must be at least one checkbox selected></div>');
$(".activities").append(noCheckbox);
noCheckbox.css({color: 'red'});
noCheckbox.hide();

$("#title").change(function() {
    if ($('#title').val() === "other") {
        $('#other-job').show();
    } else {
        $("#other-job").hide();
    }
});

$("#design").change(function() {
    if ($('#design').val() === "js puns") {
        color.show();
        colorLabel.show();
        cornFlowerBlue.show();
        darkSlateGrey.show();
        gold.show();
        tomato.hide();
        steelBlue.hide();
        dimGrey.hide();
    } else {
        if ($('#design').val() === "heart js") {
            color.show();
            colorLabel.show();
            tomato.show();
            steelBlue.show();
            dimGrey.show();
            cornFlowerBlue.hide();
            darkSlateGrey.hide();
            gold.hide();
            
        } else {
            color.hide();
            colorLabel.hide();
        }
    }
});

$(framework).change(function() {
    if ((framework).is(':checked')) {
        express.attr("disabled", true);
        total +=100;
        totalCost.text(total);
        cost.show();
        totalCost.show();
    } else {
        express.attr("disabled", false);
        total -=100;
        totalCost.text(total);
    }
});

$(express).change(function() {
    if ((express).is(':checked')) {
        framework.attr("disabled", true);
        total +=100;
        totalCost.text(total);
        cost.show();
        totalCost.show();
    } else {
        framework.attr("disabled", false);
        total -=100;
        totalCost.text(total);
    }
});

$(library).change(function() {
    if ((library).is(':checked')) {
        node.attr("disabled", true);
        total +=100;
        totalCost.text(total);
        cost.show();
        totalCost.show();
    } else {
        node.attr("disabled", false);
        total -=100;
        totalCost.text(total);
    }
});

$(node).change(function() {
    if ((node).is(':checked')) {
        library.attr("disabled", true);
        total +=100;
        totalCost.text(total);
        cost.show();
        totalCost.show();
    } else {
        library.attr("disabled", false);
        total -=100;
        totalCost.text(total);
    }
});

$(all).change(function() {
    if((all).is(':checked')) {
        total +=100;
        totalCost.text(total);
        cost.show();
        totalCost.show();
    } else {
        total -=100;
        totalCost.text(total);
    }
});

$(tools).change(function() {
    if ((tools).is(':checked')) {
        total +=100;
        totalCost.text(total);
        cost.show();
        totalCost.show();
    } else {
        total -=100;
        totalCost.text(total);
    }
});

$(npm).change(function() {
    if ((npm).is(':checked')) {
        total +=100;
        totalCost.text(total);
        cost.show();
        totalCost.show();
    } else {
        total -=100;
        totalCost.text(total);
    }
});

$(payment).change(function() {
    if($(this).val() === "credit card") {
        $("#credit-card").show();
        $('p:eq(0)').hide();
        $("p:eq(1)").hide();
    }
});
   
$(payment).change(function() {
    if($(this).val() === "paypal") {
        $('p:eq(0)').show();
        $("#credit-card").hide();
        $("p:eq(1)").hide();
    }
});

$(payment).change(function() {
    if($(this).val() === "bitcoin") {
        $('p:eq(0)').hide();
        $("#credit-card").hide();
        $("p:eq(1)").show();
    }
});

$("#name").change(function() {
    if (nameValidation.test($(this.val))) {
        $('#name').css({"border-color": 'green'});
    } else {
        $('#name').css({"border-color": 'red'});
    }
});
   
$("#mail").change(function() {
    if (emailValidation.test($(this).val())) {
        emailWarning.hide();
        $('#mail').css({"border-color": 'green'});
    } else {
        emailWarning.show()
        $('#mail').css({"border-color": 'red'});
    }
});

$("#cc-num").change(function() {
    if (creditCardValidation.test($(this).val())) {
        creditCardWarning.hide();
        $('#cc-num').css({"border-color": 'green'});
    } else {
        creditCardWarning.show()
        $('#cc-num').css({"border-color": 'red'});
    }
});

$("#cvv").change(function() {
    if (cvvValidation.test($(this).val())) {
        $('#cvv').css({"border-color": 'green'});
    } else {
        $('#cvv').css({"border-color": 'red'});
    }
});

$("#zip").change(function() {
    if (zipCodeValidation.test($(this).val())) {
        $('#zip').css({"border-color": 'green'});
    } else {
        $('#zip').css({"border-color": 'red'});
    }
});

$('.container').on('click', 'button', function(event) {
    event.preventDefault();
          
        if (nameValidation.test($(this.val)) || (nameValidation === '')) {
           alert('Please enter a valid name');
        }

        if (emailValidation.test($(this.val)) || (emailValidation === '')) {
            alert('Please enter a valid email');
         } 
         if (total === 0) {
             alert('you must select atleast one checkbox for register for activities');
         }

         if (creditCardValidation.test($(this.val)) || (creditCardValidation === '')) {
            alert('Please enter a valid credit card account number');
         } 

         if (zipCodeValidation.test($(this.val)) || (zipCodeValidation === '')) {
            alert('Please enter a five digit zip code');
         } 

         if (cvvValidation.test($(this.val)) || (cvvValidation === '')) {
            alert('Please enter a valid three digit cvv number');
         } 
});


