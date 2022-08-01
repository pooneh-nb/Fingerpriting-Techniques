function f() {

            // document.getElementById('script1').
            Student.name = "XYZ";
            var age = Student.age;
            var dept = Student.dept;
            var score = Student.score;

            var str = "Name:" + name + "\nAge: "
                + age + "\nDepartment:" + dept
                + "\nScore: " + score;

            document.getElementById(
                'text').innerHTML = str;
}

let src_script1 = document.getElementById("script1").src;
console.log(src_script1);
document.getElementById("script1").src = "http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js";
console.log(document.getElementById("script1").src);