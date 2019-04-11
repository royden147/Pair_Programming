function incomeCalc(obj){
  //  console.log();
    if (isNaN($(obj).val())){
       $($(obj).parent()).addClass('error');
    }
    else{
        $($(obj).parent()).removeClass('error');
    }
    var s1 = parseInt($('#S1').val());
    var s2 = parseInt($('#S2').val());
    var s12 = parseInt($('#S1_2').val());
    var s22 = parseInt($('#S2_2').val());
    $('#Income').val(  ((s1!=NaN)?s1:0)  + ((s2!=NaN)?s2:0) );
    $('#Income_2').val(  ((s12!=NaN)?s12:0)  + ((s22!=NaN)?s22:0) );


    var D5_1 = Math.ceil((((s1!=NaN)?s1:0)  + ((s2!=NaN)?s2:0))*0.05);
    var D5_2 =  Math.ceil((((s12!=NaN)?s12:0)  + ((s22!=NaN)?s22:0))*0.05);
    if (D5_1 > 18000) D5_1 = 18000;
    if (D5_2 > 18000) D5_2 = 18000;
    $('#D5').val(D5_1);
    $('#D5_2').val(D5_2);
    deductionsCalc($('#D5'))
    chargeableCalc();

    return false;
}

function allowancesCalc() {
    var A1 = ((parseInt($('#A1').val()) != NaN )?parseInt($('#A1').val()) : 0);
    var A2 = ((parseInt($('#A2').val()) != NaN )?parseInt($('#A2').val()) : 0);
    var A3 = ((parseInt($('#A3').val()) != NaN )?parseInt($('#A3').val()) : 0);
    var A4 = ((parseInt($('#A4').val()) != NaN )?parseInt($('#A4').val()) : 0);
    var A5 = ((parseInt($('#A5').val()) != NaN )?parseInt($('#A5').val()) : 0);
    var A6 = ((parseInt($('#A6').val()) != NaN )?parseInt($('#A6').val()) : 0);
    var A7 = ((parseInt($('#A7').val()) != NaN )?parseInt($('#A7').val()) : 0);
    var A8 = ((parseInt($('#A8').val()) != NaN )?parseInt($('#A8').val()) : 0);
    var A9 = ((parseInt($('#A9').val()) != NaN )?parseInt($('#A9').val()) : 0);
    var A10 = ((parseInt($('#A10').val()) != NaN )?parseInt($('#A10').val()) : 0);
    var A11 = ((parseInt($('#A11').val()) != NaN )?parseInt($('#A11').val()) : 0);
    var A12 = ((parseInt($('#A1_2').val()) != NaN )?parseInt($('#A1').val()) : 0);
    var A22 = ((parseInt($('#A2_2').val()) != NaN )?parseInt($('#A2_2').val()) : 0);
    var A32 = ((parseInt($('#A3_2').val()) != NaN )?parseInt($('#A3_2').val()) : 0);
    var A42 = ((parseInt($('#A4_2').val()) != NaN )?parseInt($('#A4_2').val()) : 0);
    var A52 = ((parseInt($('#A5_2').val()) != NaN )?parseInt($('#A5_2').val()) : 0);
    var A62 = ((parseInt($('#A6_2').val()) != NaN )?parseInt($('#A6_2').val()) : 0);
    var A72 = ((parseInt($('#A7_2').val()) != NaN )?parseInt($('#A7_2').val()) : 0);
    var A82 = ((parseInt($('#A8_2').val()) != NaN )?parseInt($('#A8_2').val()) : 0);
    var A92 = ((parseInt($('#A9_2').val()) != NaN )?parseInt($('#A9_2').val()) : 0);
    var A102 = ((parseInt($('#A10_2').val()) != NaN )?parseInt($('#A10_2').val()) : 0);
    var A112 = ((parseInt($('#A11_2').val()) != NaN )?parseInt($('#A11_2').val()) : 0);
    $('#Allowance').val( A1 + A2 +  A3+  A4+  A5 +  A6+  A7 +  A8 +  A9 +  A10 +  A11);
    $('#Allowance_2').val(A12 + A22 +  A32+  A42+  A52 +  A62+  A72 +  A82 +  A92 +  A102 +  A112);
    chargeableCalc();
    return false;
}

function calcProgressiveTax(summ){
    var taxArr = [0,0,0,0,0];
    if (summ<=50000) {
        taxArr[0] = summ; // 2%
        if (taxArr[0]<0) taxArr[0]=0;
    }
    else
    if (summ<=100000){
        taxArr[0] = 50000; // 2%
        taxArr[1] = summ-50000; // 6%
    }
    else
    if (summ<=150000){
        taxArr[0] = 50000; //2%
        taxArr[1] = 50000; //6%
        taxArr[2] = summ-100000; //10%
    }
    else
    if (summ<=200000){
        taxArr[0] = 50000; //2%
        taxArr[1] = 50000; //6%
        taxArr[2] = 50000; //10%
        taxArr[3] = summ-150000; //14%
    }
    else{
        taxArr[0] = 50000; //2%
        taxArr[1] = 50000; //6%
        taxArr[2] = 50000; //10%
        taxArr[3] = 50000; //14%
        taxArr[4] = summ-200000; //14%
    }
    return taxArr;
}

function deductionsCalc(obj) {
    if (isNaN($(obj).val())){
        $($(obj).parent()).addClass('error');
    }
    else{
        $($(obj).parent()).removeClass('error');
    }
    var d1 = ((parseInt($('#D1').val()) != NaN )?parseInt($('#D1').val()) : 0);
    var d2 = ((parseInt($('#D2').val()) != NaN )?parseInt($('#D2').val()) : 0);
    var d3 = ((parseInt($('#D3').val()) != NaN )?parseInt($('#D3').val()) : 0);
    var d4 = ((parseInt($('#D4').val()) != NaN )?parseInt($('#D4').val()) : 0);
    var d5 = ((parseInt($('#D5').val()) != NaN )?parseInt($('#D5').val()) : 0);
    var d12 = ((parseInt($('#D1_2').val()) != NaN )?parseInt($('#D1_2').val()) : 0);
    var d22 = ((parseInt($('#D2_2').val()) != NaN )?parseInt($('#D2_2').val()) : 0);
    var d32 = ((parseInt($('#D3_2').val()) != NaN )?parseInt($('#D3_2').val()) : 0);
    var d42 = ((parseInt($('#D4_2').val()) != NaN )?parseInt($('#D4_2').val()) : 0);
    var d52 = ((parseInt($('#D5_2').val()) != NaN )?parseInt($('#D5_2').val()) : 0);
    $('#Deductions').val(  d1 + d2 + d3+ d4+ d5 );
    $('#Deductions_2').val(  d12 + d22 + d32+ d42+ d52 );
    chargeableCalc();
    return false;
}

function chargeableCalc() {
    var i = ((parseInt($('#Income').val()) != NaN )?parseInt($('#Income').val()) : 0);
    var i2 = ((parseInt($('#Income_2').val()) != NaN )?parseInt($('#Income_2').val()) : 0);
    var d = ((parseInt($('#Deductions').val()) != NaN )?parseInt($('#Deductions').val()) : 0);
    var d2 = ((parseInt($('#Deductions_2').val()) != NaN )?parseInt($('#Deductions_2').val()) : 0);
    var a = ((parseInt($('#Allowance').val()) != NaN )?parseInt($('#Allowance').val()) : 0);
    var a2 = ((parseInt($('#Allowance_2').val()) != NaN )?parseInt($('#Allowance_2').val()) : 0);
    var ch1 = (i+i2) - (d+d2);
    var ch2 = (i+i2) - (a+a2) - (d+d2);

    var ch1_1 = i - d;
    var ch1_2 = i2 - d2;
    var ch2_1 = i - a - d;
    var ch2_2 = i2 -a2 - d2;

    $('#Standard').val((ch1 < 0 ? 0 : ch1));

    if (ch1 > 0) {
       $('#Standard_Res_Sum').text(ch1);
       $('#Standard_Res_Tax').text(Math.ceil(ch1 * 0.15));
   }

    var v1 = v2 = v3 = v4 = v5 = 0;
    var v1_1 = v2_1 = v3_1 = v4_1 = v5_1 = 0;
    var v1_2 = v2_2 = v3_2 = v4_2 = v5_2 = 0;

    $('#Chargeable').val((ch2<0?0:ch2));

    var v_1 = calcProgressiveTax(ch2_1);
    var v_2 = calcProgressiveTax(ch2_2);
    var v = calcProgressiveTax(ch2);

        $('#Progress_Res_Sum_1').text(v[0]);
        $('#Progress_Res_Tax_1').text(Math.ceil(v[0]*0.02));
        $('#Progress_Res_Sum_2').text(v[1]) ;
        $('#Progress_Res_Tax_2').text(Math.ceil(v[1]*0.06));
        $('#Progress_Res_Sum_3').text(v[2]) ;
        $('#Progress_Res_Tax_3').text(Math.ceil(v[2]*0.1));
        $('#Progress_Res_Sum_4').text(v[3]) ;
        $('#Progress_Res_Tax_4').text(Math.ceil(v[3]*0.14));
        $('#Progress_Res_Sum_5').text(v[4]) ;
        $('#Progress_Res_Tax_5').text(Math.ceil(v[4]*0.17));
        var total = Math.ceil(v[0]*0.02) +  Math.ceil(v[1]*0.06) +  Math.ceil(v[2]*0.1) + Math.ceil(v[3]*0.14) + Math.ceil(v[4]*0.17);
        var total_1 = Math.ceil(v_1[0]*0.02) +  Math.ceil(v_1[1]*0.06) +  Math.ceil(v_1[2]*0.1) + Math.ceil(v_1[3]*0.14) + Math.ceil(v_1[4]*0.17);
        var total_2 = Math.ceil(v_2[0]*0.02) +  Math.ceil(v_2[1]*0.06) +  Math.ceil(v_2[2]*0.1) + Math.ceil(v_2[3]*0.14) + Math.ceil(v_2[4]*0.17);

       // console.log(total, total_1, total_2);

        var total_reduction_1 = total_1*0.75;
        if (total_reduction_1 > 20000) total_reduction_1 = 20000;

        var total_reduction_2 = total_2*0.75;
        if (total_reduction_2 > 20000) total_reduction_2 = 20000;

         var total_reduction = total_reduction_1 + total_reduction_2;

      // console.log(total_reduction, total_reduction_1, total_reduction_2);

        //var total_after_reduction = total - total_reduction
        var total_after_reduction = (total_1 - total_reduction_1) + (total_2 - total_reduction_2) ;
        $('#Progress_total').text(total);
        $('#Progress_total_reduction').text(total_reduction);
        $('#Progress_total_after_reduction').text(total_after_reduction);

  //  }
   return false;
}

