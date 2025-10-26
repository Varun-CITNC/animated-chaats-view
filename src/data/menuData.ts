// Import all menu images
import bananaShake from "@/assets/menu/banana-shake.jpg";
import papayaShake from "@/assets/menu/papaya-shake.jpg";
import mangoShake from "@/assets/menu/mango-shake.jpg";
import strawberryShake from "@/assets/menu/strawberry-shake.jpg";
import chocolateShake from "@/assets/menu/chocolate-shake.jpg";
import pistaShake from "@/assets/menu/pista-shake.jpg";
import vanillaShake from "@/assets/menu/vanilla-shake.jpg";
import ferreroShake from "@/assets/menu/ferrero-shake.jpg";
import butterscotchShake from "@/assets/menu/butterscotch-shake.jpg";
import dryfruitsShake from "@/assets/menu/dryfruits-shake.jpg";

import sweetLassi from "@/assets/menu/sweet-lassi.jpg";
import bananaLassi from "@/assets/menu/banana-lassi.jpg";
import mangoLassi from "@/assets/menu/mango-lassi.jpg";
import chikooLassi from "@/assets/menu/chikoo-lassi.jpg";
import saffronLassi from "@/assets/menu/saffron-lassi.jpg";
import roseLassi from "@/assets/menu/rose-lassi.jpg";
import strawberryLassi from "@/assets/menu/strawberry-lassi.jpg";
import dryfruitsLassi from "@/assets/menu/dryfruits-lassi.jpg";

import iceCone from "@/assets/menu/ice-cone.jpg";
import fruitsBowl from "@/assets/menu/fruits-bowl.jpg";
import fruitsIce from "@/assets/menu/fruits-ice.jpg";
import chocoFudge from "@/assets/menu/choco-fudge.jpg";
import iceRegular from "@/assets/menu/ice-regular.jpg";
import deathChocolate from "@/assets/menu/death-chocolate.jpg";

import maharajFalooda from "@/assets/menu/maharaj-falooda.jpg";
import kesarFalooda from "@/assets/menu/kesar-falooda.jpg";
import kulfiFalooda from "@/assets/menu/kulfi-falooda.jpg";
import butterFalooda from "@/assets/menu/butter-falooda.jpg";
import delhiFalooda from "@/assets/menu/delhi-falooda.jpg";
import malaiKulfi from "@/assets/menu/malai-kulfi.jpg";
import mangoKulfi from "@/assets/menu/mango-kulfi.jpg";
import kesarKulfi from "@/assets/menu/kesar-kulfi.jpg";

export const menuData: Record<string, { title: string; image: string; description: string; price: string }> = {
  "banana-shake": {
    title: "Banana Shake",
    image: bananaShake,
    description: "Creamy and rich banana milkshake blended with fresh bananas, milk, and a touch of honey. Perfect for a refreshing treat!",
    price: "₹40",
  },
  "papaya-shake": {
    title: "Papaya Shake",
    image: papayaShake,
    description: "Tropical papaya blended to perfection with creamy milk, creating a smooth and healthy shake packed with vitamins.",
    price: "₹40",
  },
  "mango-shake": {
    title: "Mango Amonso Shake",
    image: mangoShake,
    description: "Premium Alphonso mangoes blended into a thick, luscious shake. The king of fruits in a glass!",
    price: "₹40",
  },
  "strawberry-shake": {
    title: "Very Berry Strawberry",
    image: strawberryShake,
    description: "Fresh strawberries blended with vanilla ice cream creating a berry delicious pink paradise.",
    price: "₹50",
  },
  "chocolate-shake": {
    title: "Belgian Chocolate",
    image: chocolateShake,
    description: "Rich Belgian chocolate blended with premium ice cream and milk. Pure indulgence for chocolate lovers!",
    price: "₹50",
  },
  "pista-shake": {
    title: "Resar Pista Shake",
    image: pistaShake,
    description: "Authentic pistachio shake with real pista nuts, creating a nutty, creamy, and aromatic experience.",
    price: "₹50",
  },
  "vanilla-shake": {
    title: "Vanilla Shake",
    image: vanillaShake,
    description: "Classic vanilla shake made with premium vanilla ice cream and fresh milk. Simple yet divine!",
    price: "₹50",
  },
  "ferrero-shake": {
    title: "Ferrero Rocher Shake",
    image: ferreroShake,
    description: "Luxurious shake blended with real Ferrero Rocher chocolates, hazelnuts, and chocolate chips.",
    price: "₹50",
  },
  "butterscotch-shake": {
    title: "Butterscotch Shake",
    image: butterscotchShake,
    description: "Creamy butterscotch ice cream blended with crunchy caramel bits for that perfect toffee flavor.",
    price: "₹50",
  },
  "dryfruits-shake": {
    title: "Dry Fruits Shake",
    image: dryfruitsShake,
    description: "Premium shake loaded with almonds, cashews, pistachios, dates, and saffron. A royal treat!",
    price: "₹80",
  },
  "sweet-lassi": {
    title: "Sweet Lassi",
    image: sweetLassi,
    description: "Traditional sweet yogurt drink, perfectly sweetened and topped with cream. Refreshing and cooling!",
    price: "₹50",
  },
  "banana-lassi": {
    title: "Banana Cash Lassi",
    image: bananaLassi,
    description: "Creamy lassi blended with fresh bananas and cashews for a rich, protein-packed drink.",
    price: "₹60",
  },
  "mango-lassi": {
    title: "Mango Lassi",
    image: mangoLassi,
    description: "Classic Indian favorite! Fresh mango pulp blended with yogurt, creating sweet summer magic.",
    price: "₹60",
  },
  "chikoo-lassi": {
    title: "Chikoo Lassi",
    image: chikooLassi,
    description: "Unique lassi made with sweet sapota fruit, creating a naturally sweet and creamy beverage.",
    price: "₹60",
  },
  "saffron-lassi": {
    title: "Saffron Lassi",
    image: saffronLassi,
    description: "Premium lassi infused with aromatic saffron strands and cardamom. A royal Indian drink!",
    price: "₹60",
  },
  "rose-lassi": {
    title: "Rose Lassi",
    image: roseLassi,
    description: "Delicate rose-flavored lassi with gulkand (rose petal jam), offering floral notes and cooling properties.",
    price: "₹60",
  },
  "strawberry-lassi": {
    title: "Strawberry Lassi",
    image: strawberryLassi,
    description: "Fresh strawberries blended with creamy yogurt creating a fruity, tangy, and refreshing lassi.",
    price: "₹70",
  },
  "dryfruits-lassi": {
    title: "Dry Fruits Lassi",
    image: dryfruitsLassi,
    description: "Rich lassi loaded with mixed nuts, saffron, and cardamom. Nutritious and delicious!",
    price: "₹70",
  },
  "ice-cone": {
    title: "Ice Cream Cone",
    image: iceCone,
    description: "Classic ice cream served in a crispy wafer cone. Choose from various flavors!",
    price: "₹50",
  },
  "fruits-bowl": {
    title: "Fresh Fruits Bowl",
    image: fruitsBowl,
    description: "Colorful assortment of seasonal fresh fruits, perfectly cut and served chilled.",
    price: "₹50",
  },
  "fruits-ice": {
    title: "Fruits Salad with Ice Cream",
    image: fruitsIce,
    description: "Fresh fruit salad topped with scoops of vanilla ice cream. The perfect balance!",
    price: "₹80",
  },
  "choco-fudge": {
    title: "Chocolate Fudge",
    image: chocoFudge,
    description: "Double chocolate ice cream with hot fudge sauce, chocolate chips, and whipped cream.",
    price: "₹90",
  },
  "ice-regular": {
    title: "Ice Cream Regular",
    image: iceRegular,
    description: "Two generous scoops of your favorite ice cream flavor. Classic and satisfying!",
    price: "₹100",
  },
  "death-chocolate": {
    title: "Death by Chocolate",
    image: deathChocolate,
    description: "Ultimate chocolate lover's dream! Layers of chocolate ice cream, brownie, fudge, and chocolate sauce.",
    price: "₹140",
  },
  "maharaj-falooda": {
    title: "Maha Raj Falooda",
    image: maharajFalooda,
    description: "Royal falooda with vermicelli, rose syrup, basil seeds, and ice cream. A majestic dessert!",
    price: "₹70",
  },
  "kesar-falooda": {
    title: "Kesar Falooda",
    image: kesarFalooda,
    description: "Premium falooda infused with saffron, topped with kulfi and crunchy vermicelli.",
    price: "₹70",
  },
  "kulfi-falooda": {
    title: "Kulfi Falooda",
    image: kulfiFalooda,
    description: "Traditional Indian dessert combining creamy kulfi with rose falooda and basil seeds.",
    price: "₹70",
  },
  "butter-falooda": {
    title: "Butterscotch Falooda",
    image: butterFalooda,
    description: "Fusion falooda with butterscotch ice cream, caramel sauce, and crunchy toppings.",
    price: "₹70",
  },
  "delhi-falooda": {
    title: "Delhi Style Falooda",
    image: delhiFalooda,
    description: "Authentic Delhi-style falooda loaded with extra toppings, dry fruits, and generous portions.",
    price: "₹110",
  },
  "malai-kulfi": {
    title: "Malai Kulfi",
    image: malaiKulfi,
    description: "Traditional Indian ice cream made with condensed milk, cardamom, and pistachios.",
    price: "₹40",
  },
  "mango-kulfi": {
    title: "Mango Kulfi",
    image: mangoKulfi,
    description: "Creamy kulfi infused with fresh mango pulp. A summer favorite!",
    price: "₹40",
  },
  "kesar-kulfi": {
    title: "Kesar Pista Kulfi",
    image: kesarKulfi,
    description: "Premium kulfi with saffron and crushed pistachios. Rich, aromatic, and authentic!",
    price: "₹40",
  },
};
