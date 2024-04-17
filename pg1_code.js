btn = document.querySelector('#btn');
btn_nm = document.querySelector('#btn_name');

ques1  = document.querySelectorAll('input[name =  "question1"]');
ques2  = document.querySelectorAll('input[name =  "question2"]');
ques3  = document.querySelectorAll('input[name =  "question3"]');
ques4  = document.querySelectorAll('input[name =  "question4"]');
ques5  = document.querySelectorAll('input[name =  "question5"]');
ques6  = document.querySelectorAll('input[name =  "question6"]');
ques7  = document.querySelectorAll('input[name =  "question7"]');
ques8  = document.querySelectorAll('input[name =  "question8"]');
ques9  = document.querySelectorAll('input[name =  "question9"]');
ques10 = document.querySelectorAll('input[name = "question10"]');
ques11 = document.querySelectorAll('input[name = "question11"]');
ques12 = document.querySelectorAll('input[name = "question12"]');
ques13 = document.querySelectorAll('input[name = "question13"]');
ques14 = document.querySelectorAll('input[name = "question14"]');
ques15 = document.querySelectorAll('input[name = "question15"]');
ques16 = document.querySelectorAll('input[name = "question16"]');
ques17 = document.querySelectorAll('input[name = "question17"]');
ques18 = document.querySelectorAll('input[name = "question18"]');
ques19 = document.querySelectorAll('input[name = "question19"]');
ques20 = document.querySelectorAll('input[name = "question20"]');


const qn = [ques1,ques2,ques3,ques4,ques5,ques6,ques7,ques8,ques9,ques10,ques11,ques12,ques13,ques14,ques15,ques16,ques17,ques18,ques19,ques20];  //radiobutton array

const extr = [2,3,4,7,8,12,13,14,18,20];
const intr = [1,5,6,9,10,11,15,16,17,19];

let ext_val = 0, int_val = 0;

function execute()
{
 
    let name1 = document.getElementById("name1").value;
    console.log(name1);
    sessionStorage.setItem("name",name1);

    for(let i = 0 ; i < 20; i++)
    {
        for(const r of qn[i])
        {
            if(r.checked)
            {
                let a = parseInt(r.value);
                
                if( extr.includes((i+1)) )
                {
                    ext_val += a;
                }

                else if( intr.includes((i+1) ))
                {
                    int_val += a;
                }
            }
        }
    }

    const ieScore = ext_val - int_val;
    sessionStorage.setItem('ieScore',ieScore);
    console.log(ieScore);
}


btn.onclick = execute;
