class stack
{
    constructor (data)
    {
        this.size =data;
        this.top=-1;
        this.arr =new Array(this.size);
    }
    push()
    {
        this.top++;
        if(this.top>this.size -1)
        {
            console.log("stack full ");
            top --;
        }
        else
        {
         this.arr[top]=data;
        }
    }
    pop()
    {
        if(this.top<0)
        {
            console.log("stack is empty");
        }
        else
        {
            let x = arr[this.top];
            top --;
            return x;
        }
    }
}

function reverse(str)
{
    let length = str.length;
    const stack = new Array(length);
    for(let i=0;i<length;i++)
    {
        stack.push(str[i]);
    }
    let reversed ="";
    for(let i=0;i<length;i++)
    {
        let x =stack.pop();
        reversed =reversed.concat(x);
    }
    return reversed;
}
const rev = reverse("hello");
console.log(rev);