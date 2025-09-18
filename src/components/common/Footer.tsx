import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 关于武汉印象 */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">武</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                武汉印象
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              武汉印象致力于展示江城武汉的独特魅力，从千年历史文化到现代都市风貌，
              从传统美食小吃到时尚生活方式，为您呈现一个全面、立体、生动的武汉形象。
            </p>
          </div>

          {/* 联系信息 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Phone className="w-5 h-5 mr-2 text-red-400" />
              联系我们
            </h3>
            <div className="text-gray-300 space-y-3">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                湖北省武汉市江汉区
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                027-8888-8888
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-red-400 flex-shrink-0" />
                info@wuhanyinxiang.com
              </p>
            </div>
          </div>

          {/* 服务时间 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-red-400" />
              服务时间
            </h3>
            <div className="text-gray-300 space-y-3">
              <p>周一至周日</p>
              <p>24小时在线服务</p>
              <p className="text-sm text-gray-400">
                为您提供最新的武汉资讯
              </p>
            </div>
          </div>
        </div>

        {/* 版权区域 */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            2025 武汉印象
          </p>
          <p className="text-sm text-gray-500 mt-2">
            感受江城魅力，品味武汉文化
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;