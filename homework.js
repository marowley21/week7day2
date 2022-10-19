//=======Exercise #1=========//
for(let key in person3){
    if(person3[key] instanceof object){
        if(person3[key][0]){
            console.log(person3[key][0][key2])
        }
    }else{
        console.log(person3[key])
    }
}


//=======Exercise #2=========//
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
       this.name = name;
       this.age = age;
    }
    
    public void printInfo() {
       System.out.println("Name: " + this.name + " Age: " + this.age);
    }
    
    public void addAge(int increment) {
       this.age += increment;
    }
 }
 
 public class Test {
    public static void main(String[] args) {
       Person p1 = new Person("John", 20);
       Person p2 = new Person("Jane", 30);
       
       p1.printInfo();
       p2.printInfo();
       
       p1.addAge(3);
       
       p1.printInfo();
    }
 }

 // =============Exercise #3 ============//
def checkLenght():
    string = input()
    if(len(string)>10):
        print("Big word")
    else:
        print("small Number")
checkLenght()