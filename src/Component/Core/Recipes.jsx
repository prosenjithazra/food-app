import React from 'react'

const Recipes = () => {
  return (
    <>
      <div class="cart-head cart-hd2">
        <div class="container">
          <div class="cart-title for-recp-details">
            <div class="cart-title-left">
              <h3>
                Showing result for, Newyork, America, 91123<img src="images/like.png" alt="" />
              </h3>
            </div>
            <div class="cart-title-rgt">
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">
                      <span><img src="images/home-icon.svg" alt="" /></span>
                      Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Recipes Listing
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipes