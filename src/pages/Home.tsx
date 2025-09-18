import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Utensils, Camera, History, Compass, Star } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <History className="w-8 h-8 text-red-500" />,
      title: '历史文化',
      description: '探索武汉三千年历史文化底蕴',
      link: '/culture',
      image: 'https://miaoda-site-img.cdn.bcebos.com/2ffa6f09-cdf2-4326-8a76-8f5b0ab4e0ba/images/70fcda16-94a7-11f0-a567-1ea3ef713798_0.jpg'
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      title: '著名景点',
      description: '领略江城武汉的地标建筑与自然风光',
      link: '/attractions',
      image: 'https://miaoda-site-img.cdn.bcebos.com/15a0ff62-27f4-4ee6-a379-7700365725cf/images/6a3d4b2a-94a7-11f0-9448-4607c254ba9d_0.jpg'
    },
    {
      icon: <Utensils className="w-8 h-8 text-yellow-500" />,
      title: '特色美食',
      description: '品尝正宗武汉美食与传统小吃',
      link: '/food',
      image: 'https://miaoda-site-img.cdn.bcebos.com/f74e93f2-b3a0-48c1-92df-4f1625fc445f/images/6aa6744c-94a7-11f0-b42d-8af640abeb71_0.jpg'
    },
    {
      icon: <Compass className="w-8 h-8 text-green-500" />,
      title: '旅游攻略',
      description: '获取最实用的武汉旅游指南',
      link: '/tourism',
      image: 'https://miaoda-site-img.cdn.bcebos.com/cd9d8f87-53c9-4ff5-9280-90ed39fba99e/images/6d84544a-94a7-11f0-9448-4607c254ba9d_0.jpg'
    }
  ];

  const highlights = [
    {
      title: '黄鹤楼',
      description: '江南三大名楼之一，武汉地标建筑',
      image: 'https://miaoda-site-img.cdn.bcebos.com/15a0ff62-27f4-4ee6-a379-7700365725cf/images/6a3d4b2a-94a7-11f0-9448-4607c254ba9d_0.jpg'
    },
    {
      title: '东湖樱花',
      description: '春季赏樱胜地，樱花烂漫如诗如画',
      image: 'https://miaoda-site-img.cdn.bcebos.com/6f88faa6-c523-49f2-9ca0-304ddf7c73b4/images/6e18710c-94a7-11f0-b42d-8af640abeb71_0.jpg'
    },
    {
      title: '热干面',
      description: '武汉人的早餐，香浓美味的传统小吃',
      image: 'https://miaoda-site-img.cdn.bcebos.com/f74e93f2-b3a0-48c1-92df-4f1625fc445f/images/6aa6744c-94a7-11f0-b42d-8af640abeb71_0.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://miaoda-site-img.cdn.bcebos.com/7b3c524a-f291-4494-8420-f0653b8b06bb/images/71011a90-94a7-11f0-9448-4607c254ba9d_0.jpg')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              武汉印象
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
            感受江城魅力，品味千年文化
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-gray-200 animate-fade-in-delay-2">
            探索武汉的历史底蕴、自然风光、美食文化与现代活力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-3 text-lg">
              <Link to="/attractions">
                开始探索 <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
              <Link to="/culture">
                了解文化
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              探索武汉
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              从历史文化到现代风貌，从传统美食到时尚生活，全方位了解武汉
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    {feature.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <Button asChild variant="ghost" className="text-red-600 hover:text-red-700 hover:bg-red-50 p-0">
                    <Link to={feature.link} className="flex items-center">
                      了解更多 <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              武汉亮点
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              不可错过的武汉经典体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={highlight.image} 
                    alt={highlight.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            开启您的武汉之旅
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            让我们带您深入了解这座充满魅力的江城，感受武汉独特的文化底蕴和现代活力
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Link to="/tourism">
                <Camera className="mr-2 w-5 h-5" />
                查看攻略
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg">
              <Link to="/food">
                <Utensils className="mr-2 w-5 h-5" />
                品尝美食
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;