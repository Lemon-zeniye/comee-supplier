export const orderLists = {
  total: 5,
  data: [
    {
      orderNo: "ORD000003485793451",
      orderDate: "2024-07-01",
      finalDeliveryDate: "2024-07-10",
      shippingDate: "2024-07-05",
      destination: "New York, USA",
      totalPrice: 1500.0,
      status: "delivered",
    },
    {
      orderNo: "ORD002",
      orderDate: "2024-07-02",
      finalDeliveryDate: "2024-07-12",
      shippingDate: "2024-07-06",
      destination: "Los Angeles, USA",
      totalPrice: 2200.0,
      status: "pending",
    },
    {
      orderNo: "ORD003",
      orderDate: "2024-07-03",
      finalDeliveryDate: "2024-07-15",
      shippingDate: "2024-07-07",
      destination: "Chicago, USA",
      totalPrice: 1800.0,
      status: "pending",
    },
    {
      orderNo: "ORD004",
      orderDate: "2024-07-04",
      finalDeliveryDate: "2024-07-14",
      shippingDate: "2024-07-08",
      destination: "Houston, USA",
      totalPrice: 1750.0,
      status: "shipped",
    },
    {
      orderNo: "ORD005",
      orderDate: "2024-07-05",
      finalDeliveryDate: "2024-07-16",
      shippingDate: "2024-07-09",
      destination: "Phoenix, USA",
      totalPrice: 2000.0,
      status: "approved",
    },
    {
      orderNo: "ORD006",
      orderDate: "2024-07-06",
      finalDeliveryDate: "2024-07-17",
      shippingDate: "2024-07-10",
      destination: "Philadelphia, USA",
      totalPrice: 1300.0,
      status: "delivered",
    },
    {
      orderNo: "ORD007",
      orderDate: "2024-07-07",
      finalDeliveryDate: "2024-07-18",
      shippingDate: "2024-07-11",
      destination: "San Antonio, USA",
      totalPrice: 2100.0,
      status: "canceled",
    },
    // {
    //   orderNo: "ORD008",
    //   orderDate: "2024-07-08",
    //   finalDeliveryDate: "2024-07-19",
    //   shippingDate: "2024-07-12",
    //   destination: "San Diego, USA",
    //   totalPrice: 1900.0,
    //   status: "Shipped",
    // },
    // {
    //   orderNo: "ORD009",
    //   orderDate: "2024-07-09",
    //   finalDeliveryDate: "2024-07-20",
    //   shippingDate: "2024-07-13",
    //   destination: "Dallas, USA",
    //   totalPrice: 1700.0,
    //   status: "Delivered",
    // },
    // {
    //   orderNo: "ORD010",
    //   orderDate: "2024-07-10",
    //   finalDeliveryDate: "2024-07-21",
    //   shippingDate: "2024-07-14",
    //   destination: "San Jose, USA",
    //   totalPrice: 1600.0,
    //   status: "In Transit",
    // },
  ],
};

export const lineItems = {
  total: 5,
  data: [
    {
      id: 1,
      pos: 1,
      itemNumber: "A1234",
      supplierCode: "SUP001",
      description: "High-Quality Widget",
      quantity: 100,
      unit: "pcs",
      price: 15.75,
      deliverydate: "2024-08-15",
    },
    {
      id: 2,
      pos: 2,
      itemNumber: "B5678",
      supplierCode: "SUP002",
      description: "Advanced Gadget",
      quantity: 50,
      unit: "pcs",
      price: 29.99,
      deliverydate: "2024-08-20",
    },
    {
      id: 3,
      pos: 3,
      itemNumber: "C9101",
      supplierCode: "SUP003",
      description: "Standard Toolset",
      quantity: 200,
      unit: "sets",
      price: 45.0,
      deliverydate: "2024-08-25",
    },
    {
      id: 4,
      pos: 4,
      itemNumber: "D1123",
      supplierCode: "SUP004",
      description: "Premium Equipment",
      quantity: 10,
      unit: "units",
      price: 120.5,
      deliverydate: "2024-09-01",
    },
    {
      id: 5,
      pos: 5,
      itemNumber: "E4567",
      supplierCode: "SUP005",
      description: "Eco-Friendly Component",
      quantity: 150,
      unit: "pieces",
      price: 8.99,
      deliverydate: "2024-08-30",
    },
  ],
};

export const products = {
  total: 5,
  data: [
    {
      id: 1,
      productCode: "PRD-00123",
      name: "Eco-Friendly Water Bottle",
      description:
        "A reusable, BPA-free water bottle made from sustainable materials.",
      customsDescription:
        "Plastic water bottle, reusable, with a capacity of 500 ml.",
      weight: 0.3, // Weight in kg
      preferredUnits: "kg",
      hsDescription: "Plastic articles for the conveyance or packing of goods",
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },
    {
      id: 2,
      productCode: "PRD-00124",
      name: "Stainless Steel Thermos",
      description:
        "A double-walled, vacuum-insulated thermos to keep drinks hot or cold for hours.",
      customsDescription: "Stainless steel thermos, capacity of 1 liter.",
      weight: 0.5, // Weight in kg
      preferredUnits: "kg",
      hsDescription: "Household or kitchen articles of stainless steel",
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },
    {
      id: 3,
      productCode: "PRD-00125",
      name: "Bamboo Cutlery Set",
      description:
        "A set of eco-friendly, reusable cutlery made from natural bamboo.",
      customsDescription:
        "Bamboo cutlery set, includes knife, fork, spoon, and carrying case.",
      weight: 0.2, // Weight in kg
      preferredUnits: "kg",
      hsDescription:
        "Tableware, kitchenware, other household articles and hygienic or toilet articles, of wood",
      urls: [
        "data:image/jpeg;base64,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",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },
    {
      id: 4,
      productCode: "PRD-00123",
      name: "Eco-Friendly Water Bottle",
      description:
        "A reusable, BPA-free water bottle made from sustainable materials.",
      customsDescription:
        "Plastic water bottle, reusable, with a capacity of 500 ml.",
      weight: 0.3, // Weight in kg
      preferredUnits: "kg",
      hsDescription: "Plastic articles for the conveyance or packing of goods",
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },
    {
      id: 5,
      productCode: "PRD-00124",
      name: "Stainless Steel Thermos",
      description:
        "A double-walled, vacuum-insulated thermos to keep drinks hot or cold for hours.",
      customsDescription: "Stainless steel thermos, capacity of 1 liter.",
      weight: 0.5, // Weight in kg
      preferredUnits: "kg",
      hsDescription: "Household or kitchen articles of stainless steel",
      urls: [
        [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
        ],
      ],
    },
    {
      id: 6,
      productCode: "PRD-00125",
      name: "Bamboo Cutlery Set",
      description:
        "A set of eco-friendly, reusable cutlery made from natural bamboo.",
      customsDescription:
        "Bamboo cutlery set, includes knife, fork, spoon, and carrying case.",
      weight: 0.2, // Weight in kg
      preferredUnits: "kg",
      hsDescription:
        "Tableware, kitchenware, other household articles and hygienic or toilet articles, of wood",
      urls: [
        [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
        ],
        [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
        ],
      ],
    },
    {
      id: 7,
      productCode: "PRD-00126",
      name: "Organic Cotton Tote Bag",
      description:
        "A durable and spacious tote bag made from 100% organic cotton.",
      customsDescription:
        "Cotton tote bag, reusable, with a capacity of 20 liters.",
      weight: 0.15, // Weight in kg
      preferredUnits: "kg",
      hsDescription:
        "Sacks and bags, of a kind used for the packing of goods, of cotton",
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },
    {
      id: 8,
      productCode: "PRD-00127",
      name: "Solar-Powered Charger",
      description:
        "A portable charger powered by solar energy, suitable for smartphones and tablets.",
      customsDescription: "Solar-powered charger, portable, with USB output.",
      weight: 0.4, // Weight in kg
      preferredUnits: "kg",
      hsDescription:
        "Electrical apparatus for electrical circuits; parts thereof",
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },
    {
      id: 9,
      productCode: "PRD-00128",
      name: "Biodegradable Phone Case",
      description:
        "A phone case made from biodegradable materials, designed to protect your phone while reducing waste.",
      customsDescription:
        "Biodegradable phone case, compatible with multiple phone models.",
      weight: 0.05, // Weight in kg
      preferredUnits: "kg",
      hsDescription:
        "Other articles of plastics and articles of other materials of headings 3901 to 3914",
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },
    {
      id: 10,
      productCode: "PRD-00129",
      name: "Recycled Paper Notebook",
      description:
        "A notebook made from 100% recycled paper, ideal for eco-conscious note-taking.",
      customsDescription: "Recycled paper notebook, A5 size, 100 pages.",
      weight: 0.25, // Weight in kg
      preferredUnits: "kg",
      hsDescription: "Exercise books, notebooks, and writing pads",
      urls: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
      ],
    },

    // {
    //   id: 11,
    //   productCode: "PRD-00130",
    //   name: "Reusable Stainless Steel Straw",
    //   description:
    //     "A set of stainless steel straws with a cleaning brush, perfect for reducing single-use plastic waste.",
    //   customsDescription:
    //     "Stainless steel straws, set of 4, includes cleaning brush.",
    //   weight: 0.1, // Weight in kg
    //   preferredUnits: "kg",
    //   hsDescription:
    //     "Tableware, kitchenware, other household articles and hygienic or toilet articles, of stainless steel",
    //   urls: [
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
    //   ],
    // },
    // {
    //   id: 12,
    //   productCode: "PRD-00131",
    //   name: "Compostable Coffee Pods",
    //   description:
    //     "Eco-friendly coffee pods made from compostable materials, compatible with popular coffee machines.",
    //   customsDescription:
    //     "Compostable coffee pods, pack of 20, compatible with standard machines.",
    //   weight: 0.3, // Weight in kg
    //   preferredUnits: "kg",
    //   hsDescription:
    //     "Coffee, whether or not roasted or decaffeinated; coffee husks and skins",
    //   urls: [
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
    //   ],
    // },
    // {
    //   id: 13,
    //   productCode: "PRD-00132",
    //   name: "LED Desk Lamp",
    //   description:
    //     "An energy-efficient LED desk lamp with adjustable brightness levels and a sleek design.",
    //   customsDescription: "LED desk lamp, adjustable brightness, USB powered.",
    //   weight: 0.8, // Weight in kg
    //   preferredUnits: "kg",
    //   hsDescription:
    //     "Lamps and lighting fittings including searchlights and spotlights",
    //   urls: [
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSreAlx8vw_nSEP7lJzvHzk__lcXehVxw02kQ&s",
    //   ],
    // },
  ],
};
