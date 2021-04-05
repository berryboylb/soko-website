import {useState} from 'react';
import Items from './Items';
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
            id: 1
        },
        {
            Name: 'Arabic Bangle',
            image_src: '',
            price: "4000",
            type: "bangle",
            id: 2
        },
        {
            Name: 'Steppers',
            image_src: '',
            price: "140000",
            type: "shoe",
            id: 3
        },
        {
            Name: 'Purse Bags',
            image_src: '',
            price: "10000",
            type: "bag",
            id: 4
        },
        {
            Name: 'Pendants',
            image_src: '',
            price: "10000",
            type: "Pendant",
            id: 5
        },
        {
            Name: 'Pink Bag',
            image_src: '',
            price: "80000",
            type: "bag",
            id: 6
        },
        {
            Name: 'Leathery Bag',
            image_src: '',
            price: "70000",
            type: "bag",
            id: 7
        },
        {
            Name: 'Classic Milk',
            image_src: '',
            price: "70000",
            type: "bag",
            id: 8
        },
        {
            Name: 'Sneaker Shoes',
            image_src: '',
            price: "150000",
            type: "Shoe",
            id: 9
        },
        {
            Name: 'Women Handbag',
            image_src: '',
            price: "100000",
            type: "bag",
            id: 10
        }
    ]);
    

    return ( 
        <div className= "home">
            <NavBar name = {name} />
            <Search />
            <Items  items = {items} />
        </div> 
    );
}
 
export default Home;