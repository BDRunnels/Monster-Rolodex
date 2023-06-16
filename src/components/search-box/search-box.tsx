// import  { Component } from 'react';
import { ChangeEvent, /* ChangeEventHandler */ } from 'react';
import './search-box.css'

// NEVER WANT TO USE 'any' IN TYPESCRIPT. EXPLICIT OR IMPLICIT DENOTING A TYPE.
// void is a special type; don't expect anything back (similar to undefined).
// const func: (a: string,b: number,c: boolean) => void = (a,b,c) => {}

// TYPING OBJECTS: type --> Functional Programming, interfact --> OOP. 

    // type --> cannot overload nor extend. Allow us to do a 'union' (combo of types)
    type SearchBoxProps = {
        className: string;
        placeholder?: string;
        // func: ChangeEventHandler // same as ChangeEvent, just the handler. 
        onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void ;
    };

    // EX of UNION TYPE
    // type CanadianAddress = {
    //     street: string,
    //     province: string
    // }

    // type USAddress = {
    //     street: string,
    //     state: string
    // }

    // type ItalianAddress = {
    //     street: string,
    //     region: string
    // }

    // type Address = CanadianAddress | USAddress | ItalianAddress // UNIONS. 

    // const Address: Address = {
    //     street: 'adas',
    //     region: 'adass'
    // }
    
    // interface --> extendable, similar to class components. Inherit the methods. All names start with 'I' for interface. 
    // interface ISearchBoxProps {
    //     className: string,
    //     placeholder?: string, // ___? : means either string || null.
    // };

    // interface ISearchBoxProps { // have the ability that are extensible and composable through OVERLOADING (defining it more than once, combining it all together)
    //     onChangeHandler: (a: string) => void
    // };



const SearchBox = ({className, placeholder, onChangeHandler} : /* ISearchBoxProps */ SearchBoxProps ) => {
    return (
        <input 
            className={`search-box ${className}`}
            type="search" 
            placeholder={placeholder}
            onChange={onChangeHandler} 
        />
    );
};
// class SearchBox extends Component {

//     render() {

//         return (
//             <input 
//                 className={`search-box ${this.props.className}`}
//                 type="search" 
//                 placeholder={this.props.placeholder}
//                 onChange={this.props.onChangeHandler} 
//             />
//         )
//     };
// };

export default SearchBox;