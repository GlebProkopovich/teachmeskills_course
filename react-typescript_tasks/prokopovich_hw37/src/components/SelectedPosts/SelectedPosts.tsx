import React from 'react';
import PagePannel from '../PagePannel/PagePannel';
import './SelectedPosts.scss';

const SelectedPosts = () => {
  return (
    <div className="selectedPosts-container">
      <div className="title">
        Hello<span> | World</span>
      </div>
      <h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illo
        provident neque, perferendis natus nesciunt?
      </h2>
      <div className="img">
        <img
          src="https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png"
          alt="Some pic"
        />
      </div>
      <p className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
        ratione culpa, nobis, maxime dolore veritatis minus aliquid cupiditate
        ullam odio fugiat quae voluptas. Voluptatibus, sit inventore delectus
        optio magni vel ratione voluptatem voluptate aliquam hic harum autem
        iusto alias, odio dolor eum officia minus nam dolorum numquam
        accusantium vero porro. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Necessitatibus totam quas sed voluptate nam officia,
        laboriosam eum sapiente laudantium beatae temporibus, ut debitis! Dolor
        facilis quaerat impedit tempore unde temporibus dolorem molestiae, quod,
        natus libero sed quisquam nam suscipit quidem error eligendi id quis
        harum necessitatibus consequuntur iure. Officiis consequuntur, pariatur
        quasi cupiditate quidem odit, inventore vel dolorem perspiciatis
        voluptas commodi corrupti tempora voluptate? Dicta, nihil, at iste
        quaerat neque expedita pariatur, iure eligendi tenetur ipsa provident
        minima vero quibusdam ea quisquam nulla animi velit voluptate
        reprehenderit odit ullam quae nobis. Optio aperiam ratione dolorem animi
        pariatur veniam magni dolore! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ullam voluptate exercitationem quia maiores, quam
        esse, cupiditate perferendis ducimus libero debitis consequatur
        excepturi consectetur beatae nihil natus necessitatibus harum qui sunt
        deleniti iste expedita repudiandae nobis voluptatem dicta!
        <br />
        <br />
        Dolorum, temporibus. Nulla doloremque neque hic, non laudantium laborum
        id delectus perferendis consectetur similique ullam, nostrum vero
        molestiae rem temporibus aut? Harum, amet excepturi. Veritatis quam sint
        earum sapiente nihil amet, corrupti perspiciatis sequi nesciunt alias
        placeat nisi laudantium illo dolore aut temporibus cum sunt
        necessitatibus iusto. Nulla doloremque, deleniti minima nemo saepe ipsum
        earum non nobis blanditiis consequatur laudantium optio veritatis
        obcaecati at est aliquid autem id dicta quia beatae architecto esse
        officiis? Optio labore incidunt nobis ullam reprehenderit nostrum
        exercitationem nemo error, voluptatem repellat expedita rerum, sed fugit
        officiis in quidem consectetur vel? Hic accusamus dolorum libero facere
        explicabo voluptate reiciendis sed aliquam tempore, autem perferendis
        molestias voluptatibus aperiam iste magnam accusantium magni aspernatur.
        Nostrum est quasi maiores tempora sint enim consequatur praesentium
        adipisci labore, sapiente quia? Delectus eveniet deserunt adipisci
        mollitia cum provident suscipit, debitis totam nostrum beatae magnam
        nisi quo odio reprehenderit! Ad et, alias recusandae, laborum at
        deserunt exercitationem sed dignissimos maiores, accusamus ut quibusdam.
        Soluta amet, aperiam sint officia hic eum, rerum sunt, delectus
        assumenda repellat distinctio ipsam ratione consectetur beatae quibusdam
        blanditiis obcaecati labore at incidunt. Quos expedita rerum ut quasi
        animi quae totam tenetur accusantium ipsam, nam corrupti cumque
        doloribus architecto magni commodi, aut aliquam praesentium quaerat sit
        consectetur qui aliquid vel unde. Placeat adipisci inventore eligendi
        laborum, eum fuga assumenda reprehenderit ut rem quod ipsam ea fugiat
        nostrum officia saepe porro similique voluptate. Possimus eum quas
        impedit, ipsa cupiditate numquam at illo ad dignissimos ut ipsam
        accusamus modi suscipit. Sapiente officiis, nobis perferendis sunt nihil
        rerum neque earum culpa architecto laborum quasi velit quaerat.
      </p>
      <div className="bottom-pannel">
        <div className="like-dislike">
          <button>
            <span className="material-symbols-outlined">thumb_up</span>
          </button>
          <button>
            <span className="material-symbols-outlined">thumb_down</span>
          </button>
        </div>
        <div className="savePost">
          <button>
            <span className="material-symbols-outlined">bookmark</span>
          </button>
          <button>Lorem ipsum dolor sit.</button>
        </div>
      </div>
      <PagePannel />
    </div>
  );
};

export default SelectedPosts;
