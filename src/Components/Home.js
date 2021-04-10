import {useState} from 'react';
import NavBar from './NavBar';
import Search from './Search';
const Home = () => {

    const [name] = useState([
        {
            name: 'Andrew AIESEC',
            location: 'Kisuule Rise, Kampala, Uganda',
            image_src: "../images/store.png",
            id: 1
        }
    ]);

    const [items] = useState([
        {
            Name: 'Bangle',
            image_src: '',
            price: "7500",
            type: "bangle",
            desc: "simple hand made bangle for fashion summer this 21st century",
            id: 1
        },
        {
            Name: 'Arabic Bangle',
            image_src: '',
            price: "4000",
            type: "bangle",
            desc: "simple hand made bangle for fashion summer this 21st century",
            id: 2
        },
        {
            Name: 'Steppers',
            image_src: '',
            price: "140000",
            type: "shoe",
            desc: "simple hand made shoes for fashion summer this 21st century",
            id: 3
        },
        {
            Name: 'Purse Bags',
            image_src: '',
            price: "10000",
            type: "bag",
            desc: "simple hand made bags for fashion summer this 21st century",
            id: 4
        },
        {
            Name: 'Pendants',
            image_src: '',
            price: "10000",
            type: "Pendant",
            desc: "simple hand made pendant for fashion summer this 21st century",
            id: 5
        },
        {
            Name: 'Pink Bag',
            image_src: '',
            price: "80000",
            type: "bag",
            desc: "simple hand made bag for fashion summer this 21st century",
            id: 6
        },
        {
            Name: 'Leathery Bag',
            image_src: '',
            price: "70000",
            type: "bag",
            desc: "simple hand made bag for fashion summer this 21st century",
            id: 7
        },
        {
            Name: 'Classic Milk',
            image_src: '',
            price: "70000",
            type: "bag",
            desc: "simple hand made bag for fashion summer this 21st century",
            id: 8
        },
        {
            Name: 'Sneaker Shoes',
            image_src: '',
            price: "150000",
            type: "Shoe",
            desc: "simple hand made shoes for fashion summer this 21st century",
            id: 9
        },
        {
            Name: 'Women Handbag',
            image_src: '',
            price: "100000",
            type: "bag",
            desc: "simple hand made bag for fashion summer this 21st century",
            id: 10
        }
    ]);
    

    return ( 
        <div className= "home">
            <NavBar name = {name} />
            <Search items = {items} />
            {/* <Items  items = {items} /> */}
        </div> 
    );
}
 
export default Home;