console.log(this);



const user ={
    name:'saurabh',
    age: 32,
    sayhi: function(){
        console.log('sayhi',this);
    },

    sayhello: () => {
        console.log('sayhello',this);
    }
};

user.sayhi();
user.sayhello();


const group = {
    title: 'Mr',
    userNames: ["Pranit", "Swapnil", "Ajay", "Vijay"],
    showUsers: function() {
        // console.log(this.title);
        this.userNames.forEach(function(name) {
            console.log(this.title + ' ' + name);
        });
        this.userNames.forEach((name) => {
            console.log(this.title + ' ' + name);
        });
    }
};
group.showUsers();