export const Appliances = {
    categories: [
      {
        type: "Essential",
        items: [
          {
            name: "Lights (bulb)",
            icon: "/light.svg",
            watts: [40, 60, 100]
          },
          {
            name: "Lights (CFL)",
            icon: "/light.svg",
            watts: [5, 8,11,14,18,22,23,25,45,65,80]
          },
          {
            name: "Lights (LED)",
            icon: "/light.svg",
            watts: [5, 10, 15, 30, 44, 50, 75, 90, 130, 360]
          },
          {
            name: "Refrigerator",
            icon: "/fridge.svg",
            watts: [150, 200]
          }
        ]
      },
      {
        type: "NonEssential",
        items: [
          {
            name: "TV",
            icon: "/tv.svg",
            watts: [100, 200, 300]
          },
          {
            name: "Air Conditioner",
            icon: "/ac.svg",
            watts: [900, 1200, 1500]
          }
        ]
      }
    ]
  };