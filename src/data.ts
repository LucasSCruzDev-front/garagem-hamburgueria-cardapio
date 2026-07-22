import { MenuItem, Category, Testimonial } from "./types";

export const CATEGORIES: Category[] = [
  { id: "promocoes", name: "Promoções & Lançamentos", iconName: "Sparkles" },
  { id: "artesanais", name: "Burguers Artesanais", iconName: "Flame" },
  { id: "combos-casa", name: "Combos da Casa", iconName: "Boxes" },
  {
    id: "tradicionais",
    name: "Hambúrgueres Tradicionais",
    iconName: "Utensils",
  },
  { id: "combos-simples", name: "Combos Simples", iconName: "CheckSquare" },
  { id: "porcoes", name: "Porções", iconName: "ChefHat" },
  { id: "molhos", name: "Molhos", iconName: "Droplet" },
  { id: "bebidas", name: "Bebidas", iconName: "GlassWater" },
];

export const MENU_ITEMS: MenuItem[] = [
  // Promoções e Lançamentos
  {
    id: "hexa-burguer",
    name: "Hexa Burguer",
    price: 34.99,
    description:
      "Hambúrguer artesanal 150g, alface americana, tomate, cebola roxa e ingredientes especiais no pão brioche selado.",
    category: "promocoes",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17819842226a36ebdeef7f2.jpeg",
    badge: "NOVO",
    popular: true,
  },

  // Burguers Artesanais
  {
    id: "bacon-burguer",
    name: "Bacon Burguer",
    price: 29.99,
    description:
      "Hambúrguer artesanal 150g, muito bacon crocante, cheddar derretido e maionese artesanal da casa.",
    category: "artesanais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807049916a2366dfb54c1.jpeg",
  },
  {
    id: "cheddar-burguer",
    name: "Cheddar Burguer",
    price: 29.99,
    description:
      "Hambúrguer artesanal 150g, generosa camada de cheddar cremoso derretido e cebola caramelizada.",
    category: "artesanais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807056286a23695c24fc5.jpeg",
  },
  {
    id: "bbq-burguer",
    name: "BBQ Burguer",
    price: 29.99,
    description:
      "Hambúrguer artesanal 150g, queijo cheddar, bacon crocante, onion rings e nosso molho barbecue exclusivo.",
    category: "artesanais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807061866a236b8aabfa8.jpeg",
    badge: "ESPECIAL",
    popular: true,
  },
  {
    id: "chicken-burguer",
    name: "Chicken Burguer",
    price: 29.99,
    description:
      "Filé de frango empanado ultra crocante, alface americana, tomate fresquinho e maionese verde artesanal.",
    category: "artesanais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807068586a236e2a61df6.jpeg",
  },
  {
    id: "onion-burguer",
    name: "Onion Burguer",
    price: 29.99,
    description:
      "Hambúrguer artesanal 150g, queijo cheddar, anéis de cebola dourados e molho especial da casa.",
    category: "artesanais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807072506a236fb281332.jpeg",
  },
  {
    id: "black-tie",
    name: "Black Tie",
    price: 29.99,
    description:
      "Hambúrguer artesanal 150g, gorgonzola cremoso, rúcula fresca e geleia de pimenta defumada.",
    category: "artesanais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807077096a23717d7ff08.jpeg",
  },
  {
    id: "toscane-burguer",
    name: "Toscane Burguer",
    price: 29.99,
    description:
      "Blend especial de linguiça toscana artesanal, queijo muçarela derretido, vinagrete e maionese da Garagem.",
    category: "artesanais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807083166a2373dc43bf6.jpeg",
  },

  // Combos da Casa
  {
    id: "combo-solteiro",
    name: "Combo Solteiro",
    price: 39.99,
    description:
      "1 Burguer Artesanal (à escolha) + 1 Porção de Fritas Média + 1 Refrigerante Lata.",
    category: "combos-casa",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806929956a233803e41af.jpeg",
  },
  {
    id: "combo-mozao",
    name: "Combo Mozão",
    price: 69.99,
    description:
      "2 Burguers Artesanais (à escolha) + 1 Porção de Fritas Especial Grande + 2 Refrigerantes Lata.",
    category: "combos-casa",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806926966a2336d8b16bc.jpeg",
    badge: "MAIS VENDIDO",
    popular: true,
  },
  {
    id: "combo-familia",
    name: "Combo Família",
    price: 129.99,
    description:
      "3 Burguers Artesanais + 1 Porção de Fritas Gigante com Cheddar e Bacon + 1 Guaraná Antarctica 1.5L.",
    category: "combos-casa",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806924226a2335c6269ba.jpeg",
  },
  {
    id: "combo-super-familia",
    name: "Combo Super Família",
    price: 169.99,
    description:
      "4 Burguers Artesanais + 2 Porções de Fritas Gigantes + 1 Molho Especial + 1 Refrigerante de 2L.",
    category: "combos-casa",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806933536a233969156ff.jpeg",
  },

  // Hambúrgueres Tradicionais
  {
    id: "x-burguer",
    name: "X-Burguer",
    price: 12.99,
    description:
      "Pão de hambúrguer selado, blend tradicional 90g e queijo prato derretido.",
    category: "tradicionais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806946596a233e830cfb9.jpeg",
  },
  {
    id: "x-salada",
    name: "X-Salada",
    price: 15.99,
    description:
      "Pão, hambúrguer tradicional 90g, queijo derretido, alface fresca, tomate e maionese.",
    category: "tradicionais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806948656a233f51181e2.jpeg",
  },
  {
    id: "x-egg",
    name: "X-Egg",
    price: 18.99,
    description:
      "Pão, hambúrguer tradicional 90g, queijo derretido, ovo frito na chapa e maionese.",
    category: "tradicionais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806957856a2342e94022b.jpeg",
  },
  {
    id: "x-bacon",
    name: "X-Bacon",
    price: 19.99,
    description:
      "Pão, hambúrguer tradicional 90g, queijo derretido, bacon em fatias e maionese especial.",
    category: "tradicionais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806956036a2342339e6b2.jpeg",
  },
  {
    id: "x-tudo",
    name: "X-Tudo",
    price: 24.99,
    description:
      "O clássico completo! Pão, hambúrguer, queijo, bacon, ovo, alface, tomate, milho e batata palha.",
    category: "tradicionais",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806961236a23443b1d8e2.jpeg",
  },

  // Combos Simples
  {
    id: "combo-simples-1",
    name: "Combo 2 X-Egg + 2 X-Salada",
    price: 49.99,
    description:
      "Uma oferta perfeita para a galera! 2 X-Egg completos mais 2 X-Salada tradicionais.",
    category: "combos-simples",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806967226a23469239a67.jpeg",
  },
  {
    id: "combo-simples-2",
    name: "Combo 2 X-Burguer + 2 X-Salada",
    price: 59.99,
    description:
      "Ideal para dividir. 2 X-Burguers tradicionais e 2 X-Saladas saborosos.",
    category: "combos-simples",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806973416a2348fd9806c.jpeg",
  },
  {
    id: "combo-simples-3",
    name: "Combo 2 X-Salada + 2 X-Bacon",
    price: 64.99,
    description:
      "Para quem ama bacon e salada. 2 X-Saladas crocantes e 2 X-Bacon suculentos.",
    category: "combos-simples",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806978956a234b2729145.jpeg",
  },

  // Porções
  {
    id: "fritas-150g",
    name: "Porção de Fritas 150g",
    price: 8.99,
    description:
      "Porção individual de batatas fritas crocantes e sequinhas temperadas com sal.",
    category: "porcoes",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807098466a2379d69eb09.jpeg",
  },
  {
    id: "fritas-300g",
    name: "Porção de Fritas 300g",
    price: 17.99,
    description:
      "Porção média de batatas fritas crocantes, perfeita para acompanhar seu hambúrguer.",
    category: "porcoes",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807098356a2379cb7273b.jpeg",
  },
  {
    id: "fritas-especial-300g",
    name: "Porção de Fritas Especial 300g",
    price: 24.99,
    description:
      "Batata frita coberta com generosa porção de cheddar cremoso e cubos de bacon crocantes.",
    category: "porcoes",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807100116a237a7b266f2.jpeg",
    badge: "TOP",
    popular: true,
  },
  {
    id: "fritas-especial-700g",
    name: "Porção de Fritas Especial 700g",
    price: 49.99,
    description:
      "Super porção de fritas para dividir com a galera. Coberta com muito cheddar e bacon crocante.",
    category: "porcoes",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807704716a2466a7cdfac.jpeg",
  },
  {
    id: "onion-rings-300g",
    name: "Porção Onion Rings 300g",
    price: 24.99,
    description:
      "Anéis de cebola gigantes empanados e fritos, super dourados e crocantes.",
    category: "porcoes",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807105276a237c7f8be31.jpeg",
  },

  // Molhos
  {
    id: "maionese-verde",
    name: "Maionese Verde",
    price: 3.5,
    description:
      "Maionese artesanal verde batida com ervas finas selecionadas.",
    category: "molhos",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807733926a247210efe5f.jpeg",
  },
  {
    id: "maionese-defumada",
    name: "Maionese Defumada",
    price: 3.5,
    description:
      "Maionese artesanal com toque de fumaça líquida e especiarias.",
    category: "molhos",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807733986a247216e2330.jpeg",
  },
  {
    id: "molho-barbecue",
    name: "Barbecue",
    price: 3.5,
    description: "Molho barbecue clássico encorpado, agridoce e defumado.",
    category: "molhos",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807734056a24721d8a353.jpeg",
  },
  {
    id: "molho-baconese",
    name: "Baconese",
    price: 4.0,
    description: "Maionese artesanal batida com bacon tostado de verdade.",
    category: "molhos",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17807734126a2472243236c.jpeg",
  },

  // Bebidas
  {
    id: "coca-200ml",
    name: "Coca-Cola 200ml",
    price: 3.5,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/koRVwx21Fb50Sm1pkQ57X5hoKdQgRO8M5FV5mLZe.png",
  },
  {
    id: "coca-lata",
    name: "Coca-Cola Lata 350ml",
    price: 6.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/M1QWlD4ndSH2wrtcZ5JM7ZvC6e2JNwvf1EisFMDo.png",
  },
  {
    id: "coca-zero-lata",
    name: "Coca-Cola Zero Lata 350ml",
    price: 6.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/fNw54ITWZGQshndtipgG4jiHpjsQmQG0GUlIsVc4.png",
  },
  {
    id: "guarana-lata",
    name: "Guaraná Antarctica Lata 350ml",
    price: 6.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/fUjhygVtP1zrhDRmcdo1fU1541Vj4IOIfbCnJDif.png",
  },
  {
    id: "coca-1l",
    name: "Coca-Cola 1L",
    price: 11.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/aYxolBcbGYJ4OtrxAnDck8OuGVB7hPofJH7X5IaZ.png",
  },
  {
    id: "coca-zero-1l",
    name: "Coca-Cola Zero 1L",
    price: 11.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806914876a23321f22301.jpeg",
  },
  {
    id: "guarana-15l",
    name: "Guaraná Antarctica 1,5L",
    price: 11.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/bBonL5CEMwzjhcDPZn6xHEYBwZb0CPBjdsybwfI1.jpg",
  },
  {
    id: "coca-2l",
    name: "Coca-Cola 2L",
    price: 19.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/uoHtSMJFFwr9arLUgXaFrvTwYHR99GUey3RNIgXX.png",
  },
  {
    id: "coca-zero-2l",
    name: "Coca-Cola Zero 2L",
    price: 19.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/17806915876a23328394de4.jpeg",
  },
  {
    id: "kuat-2l",
    name: "Kuat 2L",
    price: 16.0,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/PrqruJd7p3bnMaXPg1HUS36taCNpRm9TdGbJSkzt.jpg",
  },
  {
    id: "coca-25l",
    name: "Coca-Cola 2,5L",
    price: 21.99,
    category: "bebidas",
    image:
      "https://instadelivery-public.nyc3.digitaloceanspaces.com/images/zKBHG2DDlNMPWn5CA23dkFBS9RVShFV9OG4RlrLH.png",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Matheus Henrique",
    rating: 5,
    comment:
      "O Hexa Burguer é simplesmente sensacional! O blend veio suculento no ponto perfeito, pão brioche macio e a maionese verde deles é viciante. Sem falar na entrega que foi mega rápida.",
    date: "Ontem",
    avatarColor: "bg-red-600",
  },
  {
    id: "t2",
    name: "Gabriela Souza",
    rating: 5,
    comment:
      "Pedimos o Combo Mozão e super valeu a pena! Duas obras de arte de hambúrgueres e a batata especial veio coberta de cheddar de verdade e muito bacon crocante. Virei cliente fiel da Garagem!",
    date: "Há 3 dias",
    avatarColor: "bg-yellow-500",
  },
  {
    id: "t3",
    name: "Thiago Alencar",
    rating: 5,
    comment:
      "Ambiente virtual e marca incríveis. O BBQ Burguer com os anéis de cebola dentro dá um crocante sensacional. Atendimento via 99Food super ágil e prático para montar o pedido.",
    date: "Há 1 semana",
    avatarColor: "bg-amber-600",
  },
];

export const DIFFERENTIALS = [
  {
    id: "d1",
    title: "Hambúrguer Artesanal",
    description:
      "Blends de carne fresca moída diariamente e grelhada no ponto certo para máxima suculência.",
    iconName: "Flame",
  },
  {
    id: "d2",
    title: "Ingredientes Frescos",
    description:
      "Tomates, alface e cebola roxa selecionados a dedo todas as manhãs com produtores locais.",
    iconName: "Leaf",
  },
  {
    id: "d3",
    title: "Carne Selecionada",
    description:
      "Cortes nobres 100% bovinos sem aditivos ou conservantes, garantindo sabor autêntico.",
    iconName: "Beef",
  },
  {
    id: "d4",
    title: "Molhos Exclusivos",
    description:
      "Nossas maioneses artesanais (Verde, Defumada, Baconese) são receitas exclusivas da Garagem.",
    iconName: "Sparkles",
  },
  {
    id: "d5",
    title: "Delivery Rápido",
    description:
      "Embalagem térmica inovadora que mantém o hambúrguer quentinho e a batata crocante até sua porta.",
    iconName: "Truck",
  },
  {
    id: "d6",
    title: "Combos Econômicos",
    description:
      "Opções completas com batata e bebida com descontos imperdíveis para matar qualquer tamanho de fome.",
    iconName: "Percent",
  },
];
