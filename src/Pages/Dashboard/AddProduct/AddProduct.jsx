/* eslint-disable no-unused-vars */
import React from 'react';

const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const catagory = form.catagory.value;
    const price = parseFloat(form.price.value);
    const oldPrice = parseFloat(form.oldPrice.value);
    const about = form.about.value;

    const image = form.img.files[0];
    const formData = new FormData();
    formData.append('image', image);

    fetch(
      'https://api.imgbb.com/1/upload?key=148d1edf07281b86bca14b94f21e9a10',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const newProduct = {
            name,
            img: imgData?.data?.display_url,
            catagory,
            price,

            oldPrice,
            about,
          };

          const url = 'https://server.netflixbuy.com/products';
          fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newProduct),
          })
            .then((res) => res.json())
            .then((data) => console.log(data));

          event.target.reset();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card flex-shrink-0 w-80 md:w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddProduct} className="card-body">
          <h2 className="card-title">Add Product</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Product name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Image*</span>
            </label>
            <input
              type="file"
              name="img"
              placeholder="Doctor img link from img.bb"
              className="file-input file-input-bordered file-input-primary w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Catagory*</span>
            </label>
            <select name="catagory" className="select select-bordered">
              <option disabled selected>
                Pick category
              </option>
              <option>trendingProducts</option>
              <option>giftCards</option>
              <option>gamingGiftcards</option>
              <option>videoGames</option>
              <option>Subscriptions</option>
              <option>bestSoftwares</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price*</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="New Price"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Old Price*</span>
            </label>
            <input
              type="text"
              name="oldPrice"
              placeholder="old Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Descriptions*</span>
            </label>
            <textarea
              name="about"
              placeholder="Short description"
              className="input input-bordered input-lg"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn">Add</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
