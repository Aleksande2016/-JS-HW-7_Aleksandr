let Teapot = function() {

    this.information = function() {
        this.power = +prompt('Укажите мощность чайника, кВт?', '0.5 - 3 кВт'),
        // this.volume = +prompt('Укажите объем чайника?'),
        this.water = +prompt('Укажите количество воды в чайнике, л?', '0.2 - 2 л'),
        
        this.work();
    };

    this.work = function() {
        if(confirm('Включить чайник?')) {
           this.result = `${(0.00117 * this.water * (100 - 20) / this.power)*60}`;
        } else {
            alert('Чайник выключен!');
        }

        this.time();
    };

    this.time = function() {
        alert(`${Math.round(this.result)} минут`);
    };
};

let teapot = new Teapot();
teapot.information();