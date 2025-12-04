import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="bg-white py-10 border-b border-gray-100">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 text-sm font-medium tracking-widest uppercase mb-8">
          Được tin cậy bởi các tổ chức tài chính hàng đầu
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Using text for logos to avoid broken external links, styled to look like logos */}
            <div className="text-2xl font-serif font-bold text-navy-900">Vietcombank</div>
            <div className="text-2xl font-serif font-bold text-navy-900">BIDV</div>
            <div className="text-2xl font-serif font-bold text-navy-900">DragonCapital</div>
            <div className="text-2xl font-serif font-bold text-navy-900">IFC</div>
            <div className="text-2xl font-serif font-bold text-navy-900">VinaCapital</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;