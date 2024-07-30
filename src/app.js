window.onload = function() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    function generateExcuse() {
        let elements = [who, action, what, when];
        let excuseArray = [];

        for (let i = 0; i < elements.length; i++) {
            let index = Math.floor(Math.random() * elements[i].length);
            excuseArray.push(elements[i][index]);
        }

        return excuseArray.join(' ');
    }

    document.getElementById('excuse').innerHTML = `<i class="fas fa-comment-dots"></i> ${generateExcuse()}`;
};
