import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Utensils, Clock, Star, MapPin, ChefHat, Coffee, Soup, Cookie } from 'lucide-react';

const Food: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const foods = [
    {
      id: 1,
      name: '热干面',
      category: 'breakfast',
      rating: 4.9,
      description: '武汉最具代表性的早餐，面条劲道，芝麻酱香浓，配菜丰富',
      price: '6-12元',
      bestTime: '早餐时间',
      location: '蔡林记、李记热干面等',
      highlights: ['武汉特色', '早餐必选', '香浓美味', '历史悠久'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/f74e93f2-b3a0-48c1-92df-4f1625fc445f/images/6aa6744c-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '趁热食用口感最佳，可配豆浆或米酒'
    },
    {
      id: 2,
      name: '三鲜豆皮',
      category: 'breakfast',
      rating: 4.7,
      description: '武汉传统早点，豆皮包裹糯米、肉丁、香菇等馅料，外酥内嫩',
      price: '8-15元',
      bestTime: '早餐时间',
      location: '老通城、四季美等',
      highlights: ['传统工艺', '营养丰富', '口感层次', '老字号'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '刚出锅时最香，注意烫口'
    },
    {
      id: 3,
      name: '武昌鱼',
      category: 'dinner',
      rating: 4.6,
      description: '长江名鱼，肉质鲜美，刺少肉嫩，有多种烹饪方法',
      price: '60-120元',
      bestTime: '午餐、晚餐',
      location: '江边餐厅、老字号酒楼',
      highlights: ['长江特产', '营养价值高', '多种做法', '宴客佳品'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '清蒸或红烧都很美味，配黄酒更佳'
    },
    {
      id: 4,
      name: '鸭脖子',
      category: 'snack',
      rating: 4.8,
      description: '武汉特色卤味小食，麻辣鲜香，越嚼越有味',
      price: '15-30元',
      bestTime: '随时',
      location: '精武路、户部巷等',
      highlights: ['麻辣鲜香', '休闲小食', '越嚼越香', '下酒佳品'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '配啤酒享用，注意辣度选择'
    },
    {
      id: 5,
      name: '面窝',
      category: 'breakfast',
      rating: 4.5,
      description: '武汉传统早点，外酥内软，中间有洞，蘸酱食用',
      price: '2-5元',
      bestTime: '早餐时间',
      location: '街边早点摊',
      highlights: ['传统小食', '价格实惠', '外酥内软', '搭配丰富'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '趁热食用，可配豆浆或稀饭'
    },
    {
      id: 6,
      name: '糊汤粉',
      category: 'breakfast',
      rating: 4.4,
      description: '武汉特色早餐汤粉，汤汁浓郁，配菜丰富',
      price: '8-15元',
      bestTime: '早餐时间',
      location: '各大早餐店',
      highlights: ['汤汁浓郁', '配菜丰富', '暖胃养生', '经济实惠'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '冬天食用最佳，可加胡椒粉提味'
    },
    {
      id: 7,
      name: '排骨藕汤',
      category: 'dinner',
      rating: 4.7,
      description: '湖北特色汤品，排骨与莲藕炖煮，汤鲜味美，营养丰富',
      price: '25-45元',
      bestTime: '午餐、晚餐',
      location: '湖北菜餐厅',
      highlights: ['营养丰富', '汤鲜味美', '滋补养生', '老少皆宜'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '慢火炖煮，汤色乳白最佳'
    },
    {
      id: 8,
      name: '汤包',
      category: 'snack',
      rating: 4.6,
      description: '皮薄馅大，汤汁丰富，一口一个汤包的鲜美体验',
      price: '12-25元',
      bestTime: '早餐、下午茶',
      location: '小笼包店、茶楼',
      highlights: ['皮薄馅大', '汤汁丰富', '制作精细', '鲜美可口'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '小心烫口，先咬小口吸汤汁'
    }
  ];

  const categories = [
    { id: 'all', name: '全部美食', icon: <Utensils className="w-4 h-4" /> },
    { id: 'breakfast', name: '早餐小吃', icon: <Coffee className="w-4 h-4" /> },
    { id: 'dinner', name: '正餐菜品', icon: <ChefHat className="w-4 h-4" /> },
    { id: 'snack', name: '休闲小食', icon: <Cookie className="w-4 h-4" /> }
  ];

  const foodStreets = [
    {
      name: '户部巷',
      description: '武汉最著名的小吃街，汇集各种传统美食',
      specialties: ['热干面', '三鲜豆皮', '面窝', '糊汤粉'],
      location: '武昌区户部巷',
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg'
    },
    {
      name: '精武路',
      description: '鸭脖子发源地，各种卤味小食的天堂',
      specialties: ['鸭脖子', '鸭锁骨', '卤藕', '豆干'],
      location: '汉口区精武路',
      image: 'https://miaoda-site-img.cdn.bcebos.com/1ded81c5-fec8-416a-bac2-8367b67dce71/images/71809590-94a7-11f0-b42d-8af640abeb71_0.jpg'
    },
    {
      name: '江汉路步行街',
      description: '集购物与美食于一体，各种餐厅云集',
      specialties: ['各地美食', '时尚餐厅', '网红小食', '甜品饮品'],
      location: '江汉区江汉路',
      image: 'https://miaoda-site-img.cdn.bcebos.com/cd9d8f87-53c9-4ff5-9280-90ed39fba99e/images/6d84544a-94a7-11f0-9448-4607c254ba9d_0.jpg'
    }
  ];

  const filteredFoods = selectedCategory === 'all' 
    ? foods 
    : foods.filter(food => food.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'breakfast': return <Coffee className="w-4 h-4 text-orange-600" />;
      case 'dinner': return <ChefHat className="w-4 h-4 text-red-600" />;
      case 'snack': return <Cookie className="w-4 h-4 text-purple-600" />;
      default: return <Utensils className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'breakfast': return '早餐小吃';
      case 'dinner': return '正餐菜品';
      case 'snack': return '休闲小食';
      default: return '美食';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              武汉特色美食
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              品尝正宗武汉美食与传统小吃
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Utensils className="w-4 h-4 mr-2" />
                8大特色美食
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                4.6分平均评分
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <ChefHat className="w-4 h-4 mr-2" />
                地道口味
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Food Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden sm:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredFoods.map((food) => (
                    <Card key={food.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={food.image} 
                          alt={food.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          {getCategoryIcon(food.category)}
                          <Badge className="bg-white/90 text-gray-900">
                            {getCategoryName(food.category)}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-gray-900">{food.rating}</span>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center justify-between">
                          {food.name}
                        </CardTitle>
                        <p className="text-gray-600 leading-relaxed">
                          {food.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <Soup className="w-4 h-4 mr-2 text-orange-500" />
                            价格：{food.price}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-blue-500" />
                            最佳时间：{food.bestTime}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-red-500" />
                            推荐地点：{food.location}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">美食特色：</h4>
                          <div className="flex flex-wrap gap-1">
                            {food.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {food.tips && (
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <p className="text-sm text-orange-800">
                              <strong>品尝贴士：</strong>{food.tips}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Food Streets */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              美食街区
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              探索武汉最具特色的美食聚集地
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foodStreets.map((street, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={street.image} 
                    alt={street.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {street.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {street.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">特色美食：</h4>
                    <div className="flex flex-wrap gap-1">
                      {street.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-red-500" />
                    {street.location}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Food Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              武汉饮食文化
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              了解武汉美食背后的文化故事
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">过早文化</h3>
                <p className="text-gray-600 text-sm">
                  武汉人把吃早餐叫"过早"，品种丰富，是武汉独特的饮食文化
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">码头菜系</h3>
                <p className="text-gray-600 text-sm">
                  因长江码头文化影响，武汉菜口味偏重，适合体力劳动者
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Soup className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">汤文化</h3>
                <p className="text-gray-600 text-sm">
                  武汉人爱喝汤，排骨藕汤等汤品体现了湖北人的饮食智慧
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cookie className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">小食文化</h3>
                <p className="text-gray-600 text-sm">
                  鸭脖子等小食体现了武汉人的休闲生活方式和社交文化
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开启您的武汉美食之旅
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            从传统早点到特色正餐，从街边小食到精品菜肴，让味蕾感受武汉的独特魅力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <MapPin className="mr-2 w-5 h-5" />
              查找美食地图
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3 text-lg">
              <Utensils className="mr-2 w-5 h-5" />
              推荐餐厅
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;