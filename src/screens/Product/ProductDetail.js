import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import AppBar from '../../components/appbar/appBar';
import AddToCart from '../../components/Product/addToCart';

const ProductDetails = () => {
  const {product} = useSelector(state => state);
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    images,
  } = product;

  const [imageIndex, setImageIndex] = useState(0);

  const onImageChange = index => {
    setImageIndex(index);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <AppBar title="Product" />
      <View style={styles.sliderContainer}>
        <SliderBox
          images={images}
          sliderBoxHeight={Dimensions.get('window').height / 2}
          onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          currentImageEmitter={index => onImageChange(index)}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.brand}>{brand}</Text>
        <Text style={styles.category}>{category}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{price.toFixed(2)}</Text>
          {discountPercentage > 0 && (
            <Text style={styles.discount}>
              {discountPercentage}% OFF - Save ₹
              {(price * (discountPercentage / 100)).toFixed(2)}
            </Text>
          )}
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{rating.toFixed(1)}</Text>
          <Icon name="star" size={20} color={'#FFA500'} />
        </View>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.stockContainer}>
          <Text style={styles.stock}>
            {stock > 0 ? 'In Stock' : 'Out of Stock'}
          </Text>
          <Text style={styles.stock}>Sold by: {brand}</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AddToCart
            data={product}
            buttonTextStyle={styles.quantityTextStyle}
            quantityTextStyle={styles.quantityTextStyle}
            iconSize={14}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'white'},
  quantityTextStyle: {
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    marginHorizontal: 16,
  },
  sliderContainer: {
    marginBottom: 20,
  },
  detailsContainer: {
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginBottom: 5,
    color: 'black',
  },
  brand: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 16,
    marginBottom: 5,
    color: '#595F69',
  },
  category: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    color: '#595F69',
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  price: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
    marginRight: 5,
    color: 'black',
  },
  discount: {
    fontFamily: 'OpenSans-Bold',
    color: 'green',
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rating: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    marginRight: 5,
    color: 'black',
  },
  starIcon: {
    width: 20,
    height: 20,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    color: '#595F69',
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  stock: {
    fontFamily: 'OpenSans-Medium',
    fontSize: 16,
    color: '#595F69',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginVertical: 4,
  },
  button: {
    backgroundColor: '#FFA500',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ProductDetails;
