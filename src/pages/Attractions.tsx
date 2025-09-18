import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Clock, Star, Camera, TreePine, Building, Waves, Mountain } from 'lucide-react';

const Attractions: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const attractions = [
    {
      id: 1,
      name: '黄鹤楼',
      category: 'historical',
      rating: 4.8,
      description: '江南三大名楼之一，武汉地标建筑，登楼远眺长江美景',
      location: '武昌区蛇山西山坡特1号',
      openTime: '8:00-18:00',
      ticketPrice: '70元',
      highlights: ['历史建筑', '长江美景', '文化地标', '夜景观赏'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/15a0ff62-27f4-4ee6-a379-7700365725cf/images/6a3d4b2a-94a7-11f0-9448-4607c254ba9d_0.jpg',
      tips: '建议傍晚时分登楼，可欣赏长江夕阳美景'
    },
    {
      id: 2,
      name: '东湖风景区',
      category: 'natural',
      rating: 4.7,
      description: '中国最大的城中湖，春季樱花盛开，四季风光各异',
      location: '武昌区东湖路特1号',
      openTime: '全天开放',
      ticketPrice: '免费（部分景点收费）',
      highlights: ['樱花观赏', '湖光山色', '休闲健身', '生态环境'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/6d913ca0-94a7-11f0-a567-1ea3ef713798_0.jpg',
      tips: '春季3-4月是最佳赏樱时节，建议提前规划路线'
    },
    {
      id: 3,
      name: '武汉长江大桥',
      category: 'modern',
      rating: 4.6,
      description: '新中国第一座长江大桥，连接汉阳与武昌的重要地标',
      location: '武昌区临江大道19号',
      openTime: '全天开放',
      ticketPrice: '免费',
      highlights: ['工程奇迹', '历史意义', '江景观赏', '夜景灯光'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/8ad94526-d509-43c3-af93-69f18dbafc3b/images/6a338bbc-94a7-11f0-a567-1ea3ef713798_0.jpg',
      tips: '夜晚灯光璀璨，是拍照的绝佳时机'
    },
    {
      id: 4,
      name: '归元寺',
      category: 'historical',
      rating: 4.5,
      description: '武汉著名佛教寺院，清代建筑艺术典范，香火鼎盛',
      location: '汉阳区归元寺路20号',
      openTime: '8:00-17:00',
      ticketPrice: '10元',
      highlights: ['佛教文化', '古建筑', '祈福胜地', '罗汉堂'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/2ffa6f09-cdf2-4326-8a76-8f5b0ab4e0ba/images/70fcda16-94a7-11f0-a567-1ea3ef713798_0.jpg',
      tips: '数罗汉是这里的特色体验，寓意吉祥'
    },
    {
      id: 5,
      name: '汉口江滩',
      category: 'modern',
      rating: 4.7,
      description: '长江沿岸休闲带，现代化滨江公园，夜景迷人',
      location: '江岸区沿江大道',
      openTime: '全天开放',
      ticketPrice: '免费',
      highlights: ['江滩漫步', '夜景观赏', '休闲娱乐', '城市风光'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/7b3c524a-f291-4494-8420-f0653b8b06bb/images/71011a90-94a7-11f0-9448-4607c254ba9d_0.jpg',
      tips: '晚上散步最佳，可欣赏对岸武昌的夜景'
    },
    {
      id: 6,
      name: '武汉大学',
      category: 'cultural',
      rating: 4.8,
      description: '百年名校，樱花盛开时节美不胜收，建筑风格独特',
      location: '武昌区八一路299号',
      openTime: '需预约参观',
      ticketPrice: '免费（需预约）',
      highlights: ['樱花美景', '校园文化', '建筑艺术', '学术氛围'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/6f88faa6-c523-49f2-9ca0-304ddf7c73b4/images/6e18710c-94a7-11f0-b42d-8af640abeb71_0.jpg',
      tips: '樱花季需提前预约，建议关注官方通知'
    },
    {
      id: 7,
      name: '江汉路步行街',
      category: 'modern',
      rating: 4.4,
      description: '武汉最繁华的商业街区，购物美食娱乐一应俱全',
      location: '江汉区江汉路',
      openTime: '全天开放',
      ticketPrice: '免费',
      highlights: ['购物天堂', '美食聚集', '历史建筑', '夜生活'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/cd9d8f87-53c9-4ff5-9280-90ed39fba99e/images/6d84544a-94a7-11f0-9448-4607c254ba9d_0.jpg',
      tips: '晚上更加热闹，各种小吃和表演不容错过'
    },
    {
      id: 8,
      name: '光谷步行街',
      category: 'modern',
      rating: 4.3,
      description: '现代化商业综合体，科技感十足的购物娱乐中心',
      location: '洪山区珞瑜路光谷广场',
      openTime: '10:00-22:00',
      ticketPrice: '免费',
      highlights: ['现代商业', '科技体验', '时尚购物', '餐饮娱乐'],
      image: 'https://miaoda-site-img.cdn.bcebos.com/7ea0107f-f7ce-4fe0-9e62-946e9fe4a42c/images/7433dd92-94a7-11f0-9448-4607c254ba9d_0.jpg',
      tips: '年轻人聚集地，各种新潮品牌和科技产品'
    }
  ];

  const categories = [
    { id: 'all', name: '全部景点', icon: <MapPin className="w-4 h-4" /> },
    { id: 'historical', name: '历史古迹', icon: <Building className="w-4 h-4" /> },
    { id: 'natural', name: '自然风光', icon: <TreePine className="w-4 h-4" /> },
    { id: 'modern', name: '现代景观', icon: <Mountain className="w-4 h-4" /> },
    { id: 'cultural', name: '文化教育', icon: <Camera className="w-4 h-4" /> }
  ];

  const filteredAttractions = selectedCategory === 'all' 
    ? attractions 
    : attractions.filter(attraction => attraction.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'historical': return <Building className="w-4 h-4 text-amber-600" />;
      case 'natural': return <TreePine className="w-4 h-4 text-green-600" />;
      case 'modern': return <Mountain className="w-4 h-4 text-blue-600" />;
      case 'cultural': return <Camera className="w-4 h-4 text-purple-600" />;
      default: return <MapPin className="w-4 h-4 text-gray-600" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'historical': return '历史古迹';
      case 'natural': return '自然风光';
      case 'modern': return '现代景观';
      case 'cultural': return '文化教育';
      default: return '景点';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              武汉著名景点
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              探索江城武汉的地标建筑与自然风光
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                8大必游景点
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                4.6分平均评分
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Camera className="w-4 h-4 mr-2" />
                绝佳拍照地
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
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
                  {filteredAttractions.map((attraction) => (
                    <Card key={attraction.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={attraction.image} 
                          alt={attraction.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          {getCategoryIcon(attraction.category)}
                          <Badge className="bg-white/90 text-gray-900">
                            {getCategoryName(attraction.category)}
                          </Badge>
                        </div>
                        <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 rounded-full px-2 py-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium text-gray-900">{attraction.rating}</span>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl flex items-center justify-between">
                          {attraction.name}
                        </CardTitle>
                        <p className="text-gray-600 leading-relaxed">
                          {attraction.description}
                        </p>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center text-sm text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 text-red-500" />
                            {attraction.location}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2 text-blue-500" />
                            {attraction.openTime}
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Waves className="w-4 h-4 mr-2 text-green-500" />
                            门票：{attraction.ticketPrice}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-medium text-gray-900">景点亮点：</h4>
                          <div className="flex flex-wrap gap-1">
                            {attraction.highlights.map((highlight, idx) => (
                              <Badge key={idx} variant="outline" className="text-xs">
                                {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {attraction.tips && (
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="text-sm text-blue-800">
                              <strong>游览贴士：</strong>{attraction.tips}
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

      {/* Travel Tips */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              游览建议
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              让您的武汉之旅更加精彩难忘
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">最佳游览时间</h3>
                <p className="text-gray-600 text-sm">
                  春季（3-5月）和秋季（9-11月）是最佳旅游季节，气候宜人，景色优美
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">交通出行</h3>
                <p className="text-gray-600 text-sm">
                  地铁、公交、轮渡等公共交通便利，建议办理武汉通卡方便出行
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">拍照攻略</h3>
                <p className="text-gray-600 text-sm">
                  黄鹤楼夕阳、东湖樱花、江滩夜景是必拍的经典场景
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">游览路线</h3>
                <p className="text-gray-600 text-sm">
                  建议按区域规划路线，武昌区、汉口区、汉阳区分别安排一天游览
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开始您的武汉景点之旅
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            从历史古迹到现代地标，从自然风光到人文景观，武汉的每一处风景都值得您细细品味
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <MapPin className="mr-2 w-5 h-5" />
              查看地图导航
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg">
              <Camera className="mr-2 w-5 h-5" />
              拍照打卡攻略
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Attractions;