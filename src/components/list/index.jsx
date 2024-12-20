import React from "react";
import './style.scss';

export default function List() {
  return (
    <div className="box">
      <ol className="articles">
        <li className="articles__article" style={{ animationOrder: 1 }}>
          <a className="articles__link">
            <div className="articles__content articles__content--lhs">
              <h2 className="articles__title">
                Sweet roll gingerbread sweet roll jelly
              </h2>
              <div className="articles__footer">
                <p>Cakes</p>
                <time>1 Jan 2020</time>
              </div>
            </div>
            <div
              className="articles__content articles__content--rhs"
              aria-hidden="true"
            >
              <h2 className="articles__title">
                Sweet roll gingerbread sweet roll jelly
              </h2>
              <div className="articles__footer">
                <p>Cakes</p>
                <time>1 Jan 2020</time>
              </div>
            </div>
          </a>
        </li>
        <li className="articles__article" style={{ animationOrder: 2 }}>
          <a className="articles__link">
            <div className="articles__content articles__content--lhs">
              <h2 className="articles__title">
                Bar cupcake chocolate topping brownie
              </h2>
              <div className="articles__footer">
                <p>Chocolates</p>
                <time>2 Feb 2020</time>
              </div>
            </div>
            <div
              className="articles__content articles__content--rhs"
              aria-hidden="true"
            >
              <h2 className="articles__title">
                Bar cupcake chocolate topping brownie
              </h2>
              <div className="articles__footer">
                <p>Chocolates</p>
                <time>2 Feb 2020</time>
              </div>
            </div>
          </a>
        </li>
        <li className="articles__article" style={{ animationOrder: 3 }}>
          <a className="articles__link">
            <div className="articles__content articles__content--lhs">
              <h2 className="articles__title">
                Powder tootsie roll chocolate sugar
              </h2>
              <div className="articles__footer">
                <p>Puddings</p>
                <time>3 Mar 2020</time>
              </div>
            </div>
            <div
              className="articles__content articles__content--rhs"
              aria-hidden="true"
            >
              <h2 className="articles__title">
                Powder tootsie roll chocolate sugar
              </h2>
              <div className="articles__footer">
                <p>Puddings</p>
                <time>3 Mar 2020</time>
              </div>
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
}
