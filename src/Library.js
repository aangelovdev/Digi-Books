import { Component } from 'react';
import Navbar from "./Navbar";
import useToken from './useToken';

async function getAllBooks(token) {
  return fetch('https://books-library-dev.herokuapp.com/api/book', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': 'Bearer ' + token,
    },
  }).then(data => data.json())
}

class Library extends Component {

  // componentDidMount() {
  //   const { token } = useToken();
  //   getAllBooks(token);
  // }

  render() {
    return (
      <>
        <Navbar />
  
        <div className="books-container">
          <div className="search-container">
            <h3>ALL BOOKS</h3>
            <input id="search-button" type="text" placeholder="Search.." name="search" />
          </div>
  
          <div className="books-list">
  
            <div className="book">
              <div className="book-container">
                <div className="book-image">
                    {/* <img src="images/littlewomen.png" /> */}
                </div>
                <div className="book-content">
                    <h4 id="book-name">LITTLE WOMEN</h4>
                    <p>Louisa May Alcott</p>
                    <p>Genre: <strong>Fiction classNameics</strong></p>
                    <p>Created on: <strong>12.05.2021</strong> </p>
                    <p>Updated on: <strong>21.10.2021</strong> </p>
                </div>
  
                <div className="book-button">
                  <button id="button-book"type="button"><i className="fa fa-play" aria-hidden="true"></i></button>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </>
    );
  }

}


export default Library;
