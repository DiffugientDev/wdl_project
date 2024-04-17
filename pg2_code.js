btn = document.querySelector('#btn');

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


const qn = [ques1,ques2,ques3,ques4,ques5,ques6,ques7,ques8,ques9,ques10];  //radiobutton array

const opt = [1,4,10];
const pess = [3,7,9];
let o_val = 0, p_val = 0;

function execute()
{
    for(let i = 0 ; i < 10; i++)
    {
        for(const r of qn[i])
        {
            if(r.checked)
            {
                let a = parseInt(r.value);
                
                if( opt.includes((i+1)))
                {
                    o_val += a;
                }

                else if( pess.includes((i+1) ))
                {
                    p_val += a;
                }
            }
        }
    }

    const opScore = o_val - p_val;
    sessionStorage.setItem("opScore",opScore);
    console.log(opScore);
}

btn.onclick = execute;
