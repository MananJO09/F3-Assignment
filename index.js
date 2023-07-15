async function getMenu() {
    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/saksham-accio/f2_contest_3/main/food.json"
        );
        const data = await response.json();
        renderData(data);
    } catch(error){
        console.log("Error fething menu:", error);
    }
}

function takeOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            const burgers = ['Burger 1', 'Burger 2', 'Burger 3'];
            const order = burgers.reduce((obj, burger) => {
                obj[burger] = 1; // Assuming 1 quantity for each selected burger
                return obj;
            }, {});
            resolve(order);
        }, 2500);
    });
}

function orderPrep() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: false });
        }, 1500);
    });
}

function payOrder() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ order_status: true, paid: true });
        }, 1000);
    });
}

function thankyouFnc() {
    alert('Thank you for eating with us today!');
}

// Assuming you have a button or event to trigger the process
function startOrderProcess() {
    getMenu()
        .then(() => takeOrder())
        .then(order => {
            console.log('Order:', order);
            return orderPrep();
        })
        .then(orderPrepResult => {
            console.log('Order Preparation:', orderPrepResult);
            return payOrder();
        })
        .then(payOrderResult => {
            console.log('Payment:', payOrderResult);
            thankyouFnc();
        })
        .catch(error => {
            console.error('Error during the order process:', error);
        });
}
