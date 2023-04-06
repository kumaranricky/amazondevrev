export const initialState = {
    cartList:[],
    productList:[{
      title: 'ROLEX WATCH',
      price: '10000',
      rating: '4',
      imageURL: 'https://images.lifestyleasia.com/wp-content/uploads/2019/07/03173244/rolex-cosmograph-daytona-yellow-gold.jpg__1536x0_q75_crop-scale_subsampling-2_upscale-false.jpg?tr=w-1200,h-900'
    },
    {
      title: 'LENOVO LAPTOP',
      price: '70000',
      rating: '5',
      imageURL: 'https://img2.gadgetsnow.com/gd/images/products/additional/small/G385427_View_1/computer-laptop/laptops/lenovo-ideapad-gaming-3-82k201ulin-amd-ryzen-5-5600h-15-6-inches-gaming-laptop-16gb-512gb-ssd-windows-11-shadow-black-2-25-kg-.jpg'
    },
    {
      title: 'PONNIYIN SELVAN BOOK',
      price: '500',
      rating: '3',
      imageURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/91mUCMp+USL.jpg'
    },
    {
      title: 'USHA FAN',
      price: '2500',
      rating: '2',
      imageURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81phmXXsv4L._SL1500_.jpg'
    },
    {
      title: 'PARAGON SHOE',
      price: '800',
      rating: '4',
      imageURL: 'https://5.imimg.com/data5/JV/YF/CC/SELLER-2784282/paragon-men-black-slip-on-formal-shoes-9549-500x500.JPG'
    },
    {
      title: 'REDMI MOBILE',
      price: '15000',
      rating: '5',
      imageURL: 'https://m.media-amazon.com/images/I/41Pn3umtB8L._SX300_SY300_QL70_FMwebp_.jpg'
    },
    {
      title: 'SHIRT',
      price: '500',
      rating: '2',
      imageURL: 'https://m.media-amazon.com/images/I/516u9xd1laL._UY879_.jpg'
    },
    {
      title: 'VASANTH AC',
      price: '70000',
      rating: '4',
      imageURL: 'https://cdn.shopify.com/s/files/1/0567/7534/4185/products/B083788D2Q.PT01_e045d5eb-8957-495e-b289-62f8a39166b3_537x537.webp?v=1676893460'
    },
    {
      title: ' FASTTRACKBAG',
      price: '1000',
      rating: '950',
      imageURL: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81PtF30TLUL._UL1500_.jpg'
    }]
  };

  export const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { 
          ...state, 
          cartList:[...state.cartList, action.payload]
        };
    case 'REMOVE_FROM_CART':
         return { 
          ...state, 
          cartList: state.cartList.filter(item => item.id !== action.payload)
        };
      default:
        return state;
    }
  }