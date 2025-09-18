import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Plane, 
  Train, 
  Bus, 
  Car, 
  Hotel, 
  Utensils, 
  Camera, 
  Wallet,
  Sun,
  Cloud,
  Snowflake,
  Leaf
} from 'lucide-react';

const Tourism: React.FC = () => {
  const travelRoutes = [
    {
      title: '经典一日游',
      duration: '1天',
      difficulty: '轻松',
      highlights: ['黄鹤楼', '户部巷', '长江大桥', '汉口江滩'],
      description: '适合初次来武汉的游客，一天时间游览最具代表性的景点',
      schedule: [
        { time: '09:00', activity: '黄鹤楼游览', duration: '2小时' },
        { time: '11:30', activity: '户部巷品尝美食', duration: '1.5小时' },
        { time: '14:00', activity: '长江大桥观光', duration: '1小时' },
        { time: '16:00', activity: '汉口江滩漫步', duration: '2小时' },
        { time: '18:00', activity: '江滩夜景欣赏', duration: '1小时' }
      ],
      budget: '200-300元',
      image: 'https://miaoda-site-img.cdn.bcebos.com/15a0ff62-27f4-4ee6-a379-7700365725cf/images/6a3d4b2a-94a7-11f0-9448-4607c254ba9d_0.jpg'
    },
    {
      title: '文化深度游',
      duration: '2天',
      difficulty: '中等',
      highlights: ['武汉大学', '东湖', '归元寺', '湖北省博物馆'],
      description: '深入了解武汉的历史文化和教育传统',
      schedule: [
        { time: '第一天', activity: '武汉大学 → 东湖风景区 → 樱花园', duration: '全天' },
        { time: '第二天', activity: '归元寺 → 湖北省博物馆 → 古琴台', duration: '全天' }
      ],
      budget: '400-600元',
      image: 'https://miaoda-site-img.cdn.bcebos.com/6f88faa6-c523-49f2-9ca0-304ddf7c73b4/images/6e18710c-94a7-11f0-b42d-8af640abeb71_0.jpg'
    },
    {
      title: '美食探索游',
      duration: '3天',
      difficulty: '轻松',
      highlights: ['户部巷', '精武路', '江汉路', '光谷步行街'],
      description: '专为美食爱好者设计的武汉美食之旅',
      schedule: [
        { time: '第一天', activity: '户部巷传统小吃体验', duration: '全天' },
        { time: '第二天', activity: '精武路卤味文化 + 江汉路时尚餐厅', duration: '全天' },
        { time: '第三天', activity: '光谷现代美食 + 老字号餐厅', duration: '全天' }
      ],
      budget: '600-800元',
      image: 'https://miaoda-site-img.cdn.bcebos.com/f74e93f2-b3a0-48c1-92df-4f1625fc445f/images/6aa6744c-94a7-11f0-b42d-8af640abeb71_0.jpg'
    }
  ];

  const seasonalGuide = [
    {
      season: '春季',
      months: '3-5月',
      icon: <Leaf className="w-6 h-6 text-green-500" />,
      weather: '温和宜人，15-25°C',
      highlights: ['樱花盛开', '东湖赏花', '户外活动'],
      recommendations: ['武汉大学看樱花', '东湖绿道骑行', '汉口江滩踏青'],
      tips: '樱花季人流较多，建议提前预约和规划路线'
    },
    {
      season: '夏季',
      months: '6-8月',
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      weather: '炎热多雨，25-35°C',
      highlights: ['长江游泳', '夜市美食', '室内景点'],
      recommendations: ['汉口江滩夜游', '室内博物馆', '空调商场购物'],
      tips: '注意防暑降温，多选择室内或夜间活动'
    },
    {
      season: '秋季',
      months: '9-11月',
      icon: <Cloud className="w-6 h-6 text-orange-500" />,
      weather: '凉爽舒适，15-25°C',
      highlights: ['秋高气爽', '登高望远', '美食丰收'],
      recommendations: ['黄鹤楼登高', '东湖秋景', '品尝时令美食'],
      tips: '最佳旅游季节，天气舒适，适合各种户外活动'
    },
    {
      season: '冬季',
      months: '12-2月',
      icon: <Snowflake className="w-6 h-6 text-blue-500" />,
      weather: '寒冷干燥，0-10°C',
      highlights: ['温泉养生', '火锅美食', '室内文化'],
      recommendations: ['温泉度假村', '火锅店聚餐', '博物馆文化游'],
      tips: '注意保暖，多选择室内活动和温暖的美食'
    }
  ];

  const transportationGuide = [
    {
      type: '飞机',
      icon: <Plane className="w-6 h-6 text-blue-600" />,
      details: '武汉天河国际机场',
      advantages: ['速度快', '航班多', '覆盖面广'],
      tips: '机场有地铁2号线直达市区，约45分钟',
      cost: '根据出发地不同，200-2000元'
    },
    {
      type: '高铁',
      icon: <Train className="w-6 h-6 text-green-600" />,
      details: '武汉站、汉口站、武昌站',
      advantages: ['准点率高', '舒适便捷', '市区便利'],
      tips: '三个火车站均有地铁连接，选择就近站点',
      cost: '根据距离，100-800元'
    },
    {
      type: '自驾',
      icon: <Car className="w-6 h-6 text-red-600" />,
      details: '多条高速公路汇聚',
      advantages: ['自由度高', '适合家庭', '可带特产'],
      tips: '市区停车位紧张，建议选择有停车场的酒店',
      cost: '油费+过路费，根据距离计算'
    },
    {
      type: '长途客车',
      icon: <Bus className="w-6 h-6 text-purple-600" />,
      details: '多个长途客运站',
      advantages: ['价格便宜', '班次较多', '直达性好'],
      tips: '适合中短距离出行，注意选择正规客运站',
      cost: '50-300元，根据距离'
    }
  ];

  const accommodationGuide = [
    {
      type: '豪华酒店',
      priceRange: '500-1500元/晚',
      features: ['五星级服务', '地理位置优越', '设施完善'],
      recommendations: ['万达瑞华酒店', '香格里拉大酒店', '凯悦酒店'],
      suitable: '商务出行、蜜月旅行、高端需求'
    },
    {
      type: '商务酒店',
      priceRange: '200-500元/晚',
      features: ['性价比高', '交通便利', '服务标准'],
      recommendations: ['如家酒店', '汉庭酒店', '7天连锁'],
      suitable: '商务出差、普通旅游、短期住宿'
    },
    {
      type: '青年旅社',
      priceRange: '50-150元/晚',
      features: ['价格实惠', '氛围活跃', '结交朋友'],
      recommendations: ['武汉国际青年旅舍', '背包客栈'],
      suitable: '学生旅行、背包客、预算有限'
    },
    {
      type: '民宿客栈',
      priceRange: '100-300元/晚',
      features: ['体验当地生活', '个性化服务', '家庭氛围'],
      recommendations: ['江汉路民宿', '东湖附近客栈'],
      suitable: '深度体验、家庭出游、长期住宿'
    }
  ];

  const budgetGuide = [
    {
      type: '经济型',
      dailyBudget: '150-300元',
      accommodation: '青年旅社、经济酒店',
      dining: '街边小吃、快餐',
      transportation: '公共交通',
      activities: '免费景点、公园'
    },
    {
      type: '舒适型',
      dailyBudget: '300-600元',
      accommodation: '三星酒店、品牌连锁',
      dining: '中档餐厅、特色美食',
      transportation: '地铁+出租车',
      activities: '付费景点、娱乐项目'
    },
    {
      type: '豪华型',
      dailyBudget: '600-1200元',
      accommodation: '四五星酒店',
      dining: '高档餐厅、特色菜系',
      transportation: '专车、包车',
      activities: 'VIP服务、特色体验'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              武汉旅游攻略
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              获取最实用的武汉旅游指南，让您的江城之旅更加精彩
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                四季皆宜
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                精选路线
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Wallet className="w-4 h-4 mr-2" />
                预算指南
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Routes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              推荐旅游路线
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              根据不同需求和时间安排，为您推荐最适合的武汉旅游路线
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {travelRoutes.map((route, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={route.image} 
                    alt={route.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge className="bg-white/90 text-gray-900">
                      {route.duration}
                    </Badge>
                    <Badge variant="secondary">
                      {route.difficulty}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{route.title}</CardTitle>
                  <p className="text-gray-600 leading-relaxed">
                    {route.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">主要景点：</h4>
                    <div className="flex flex-wrap gap-1">
                      {route.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">行程安排：</h4>
                    <div className="space-y-1">
                      {route.schedule.map((item, idx) => (
                        <div key={idx} className="text-sm text-gray-600 flex items-center">
                          <Clock className="w-3 h-3 mr-2 text-blue-500" />
                          <span className="font-medium mr-2">{item.time}</span>
                          <span>{item.activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center text-sm text-gray-600">
                      <Wallet className="w-4 h-4 mr-1 text-green-500" />
                      预算：{route.budget}
                    </div>
                    <Button size="sm" variant="outline">
                      查看详情
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Seasonal Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              四季旅游指南
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              武汉四季分明，每个季节都有独特的魅力和最佳的游览体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalGuide.map((season, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {season.icon}
                  </div>
                  <CardTitle className="text-xl">{season.season}</CardTitle>
                  <Badge variant="outline" className="w-fit mx-auto">
                    {season.months}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">天气情况：</h4>
                    <p className="text-sm text-gray-600">{season.weather}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">季节亮点：</h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {season.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">推荐活动：</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {season.recommendations.map((rec, idx) => (
                        <li key={idx}>• {rec}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>贴士：</strong>{season.tips}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Guide */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              交通指南
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              多种交通方式到达武汉，选择最适合您的出行方案
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportationGuide.map((transport, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-3">
                    {transport.icon}
                  </div>
                  <CardTitle className="text-lg">{transport.type}</CardTitle>
                  <p className="text-sm text-gray-600">{transport.details}</p>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">优势：</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {transport.advantages.map((advantage, idx) => (
                        <li key={idx}>• {advantage}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-xs text-green-800">
                      <strong>提示：</strong>{transport.tips}
                    </p>
                  </div>

                  <div className="text-center">
                    <Badge variant="outline">
                      {transport.cost}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodation & Budget */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Accommodation */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">住宿指南</h2>
              <div className="space-y-6">
                {accommodationGuide.map((accommodation, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">{accommodation.type}</h3>
                        <Badge variant="outline">{accommodation.priceRange}</Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">特点：</h4>
                          <div className="flex flex-wrap gap-1">
                            {accommodation.features.map((feature, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">推荐：</h4>
                          <p className="text-sm text-gray-600">
                            {accommodation.recommendations.join('、')}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-1">适合：</h4>
                          <p className="text-sm text-gray-600">{accommodation.suitable}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Budget Guide */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">预算指南</h2>
              <div className="space-y-6">
                {budgetGuide.map((budget, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold">{budget.type}</h3>
                        <Badge className="bg-green-100 text-green-800">
                          {budget.dailyBudget}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center text-sm">
                          <Hotel className="w-4 h-4 mr-2 text-blue-500" />
                          <span className="font-medium mr-2">住宿：</span>
                          <span className="text-gray-600">{budget.accommodation}</span>
                        </div>
                        
                        <div className="flex items-center text-sm">
                          <Utensils className="w-4 h-4 mr-2 text-orange-500" />
                          <span className="font-medium mr-2">餐饮：</span>
                          <span className="text-gray-600">{budget.dining}</span>
                        </div>
                        
                        <div className="flex items-center text-sm">
                          <Car className="w-4 h-4 mr-2 text-green-500" />
                          <span className="font-medium mr-2">交通：</span>
                          <span className="text-gray-600">{budget.transportation}</span>
                        </div>
                        
                        <div className="flex items-center text-sm">
                          <Camera className="w-4 h-4 mr-2 text-purple-500" />
                          <span className="font-medium mr-2">活动：</span>
                          <span className="text-gray-600">{budget.activities}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            开始规划您的武汉之旅
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            有了这份详细的旅游攻略，相信您一定能在武汉度过一段美好而难忘的时光
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
              <Calendar className="mr-2 w-5 h-5" />
              制定行程计划
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg">
              <MapPin className="mr-2 w-5 h-5" />
              下载离线地图
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tourism;