import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Button } from "react-native-paper";
import { Product } from "../types";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

const ProductListItem = ({ product }: { product: Product }) => {
  console.log(product);
  return (
    <Link href={`/product`} asChild>
      <Pressable onPress style={styles.container}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Button icon="camera" mode="contained">
          Order Me
        </Button>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  price: {
    fontSize: 20,
    color: Colors.light.tint,
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    resizeMode: "contain",
    marginVertical: 20,
  },
});
