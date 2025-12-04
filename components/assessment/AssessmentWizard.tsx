import React, { useState } from 'react';
import { ViewState, AssessmentAnswers } from '../../types';
import Button from '../Button';
import { ArrowRight, ArrowLeft, HelpCircle } from 'lucide-react';

interface AssessmentWizardProps {
  onComplete: (answers: AssessmentAnswers) => void;
  onCancel: () => void;
}

const AssessmentWizard: React.FC<AssessmentWizardProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswers>({
    industry: '',
    co2Tracking: 'dont_know',
    energySource: 'dont_know',
    wasteManagement: 'dont_know',
    financialAudit: 'dont_know',
    complianceOfficer: 'dont_know'
  });

  const handleSelect = (key: keyof AssessmentAnswers, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const renderOption = (key: keyof AssessmentAnswers, value: string, label: string) => (
    <div 
      onClick={() => handleSelect(key, value)}
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
        answers[key] === value 
          ? 'border-gold-500 bg-gold-500/10' 
          : 'border-gray-200 hover:border-navy-900'
      }`}
    >
      <div className="flex items-center">
        <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${answers[key] === value ? 'border-gold-500' : 'border-gray-300'}`}>
          {answers[key] === value && <div className="w-3 h-3 rounded-full bg-gold-500"></div>}
        </div>
        <span className="font-medium text-navy-900">{label}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-ivory pt-24 pb-12">
      <div className="container mx-auto px-6 max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-gray-500 uppercase tracking-widest mb-2">
            <span>Sàng lọc</span>
            <span>Môi trường</span>
            <span>Quản trị</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-navy-900 transition-all duration-500 ease-out"
              style={{ width: `${((step + 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border-t-4 border-gold-500">
          
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-navy-900 mb-2">Doanh nghiệp của bạn thuộc lĩnh vực nào?</h2>
              <p className="text-gray-500 mb-6">Câu trả lời giúp chúng tôi chọn bộ tiêu chuẩn phù hợp.</p>
              
              <div className="grid grid-cols-1 gap-4">
                {renderOption('industry', 'manufacturing', 'Sản xuất / Chế biến (Nhà máy, Xưởng)')}
                {renderOption('industry', 'service', 'Dịch vụ / Thương mại / Văn phòng')}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Hiện trạng Môi trường (E)</h2>
              
              <div className="space-y-4">
                <p className="font-semibold text-navy-800">1. Doanh nghiệp có đo lường khí thải CO2 (Scope 1, 2) không?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {renderOption('co2Tracking', 'yes', 'Có, định kỳ')}
                  {renderOption('co2Tracking', 'no', 'Chưa có')}
                  {renderOption('co2Tracking', 'dont_know', 'Tôi không rõ')}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-semibold text-navy-800">2. Nguồn năng lượng chính đang sử dụng?</p>
                <div className="grid grid-cols-1 gap-3">
                  {renderOption('energySource', 'grid', '100% Điện lưới quốc gia')}
                  {renderOption('energySource', 'renewable', 'Có sử dụng Điện mặt trời / Tái tạo')}
                  {renderOption('energySource', 'dont_know', 'Tôi không rõ')}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-semibold text-navy-800">3. Quy trình xử lý rác thải?</p>
                <div className="grid grid-cols-1 gap-3">
                  {renderOption('wasteManagement', 'certified', 'Có đơn vị thu gom đạt chuẩn xử lý')}
                  {renderOption('wasteManagement', 'local', 'Đổ rác thải chung địa phương')}
                  {renderOption('wasteManagement', 'dont_know', 'Tôi không rõ')}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <h2 className="text-3xl font-serif font-bold text-navy-900">Hiện trạng Quản trị (G)</h2>
              
              <div className="space-y-4">
                <p className="font-semibold text-navy-800">1. Báo cáo tài chính có được kiểm toán độc lập không?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {renderOption('financialAudit', 'yes', 'Có')}
                  {renderOption('financialAudit', 'no', 'Không')}
                  {renderOption('financialAudit', 'dont_know', 'Không rõ')}
                </div>
              </div>

              <div className="space-y-4">
                <p className="font-semibold text-navy-800">2. Có nhân sự phụ trách pháp chế / tuân thủ không?</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {renderOption('complianceOfficer', 'yes', 'Có chuyên trách')}
                  {renderOption('complianceOfficer', 'no', 'Kiêm nhiệm / Không')}
                  {renderOption('complianceOfficer', 'dont_know', 'Không rõ')}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-6 border-t border-gray-100">
            {step > 0 ? (
              <Button variant="ghost" onClick={prevStep}><ArrowLeft className="mr-2 w-4 h-4"/> Quay lại</Button>
            ) : (
              <Button variant="ghost" onClick={onCancel}>Hủy bỏ</Button>
            )}

            {step < 2 ? (
              <Button onClick={nextStep} disabled={!answers.industry && step === 0}>Tiếp tục <ArrowRight className="ml-2 w-4 h-4"/></Button>
            ) : (
              <Button onClick={() => onComplete(answers)}>Xem Kết Quả <ArrowRight className="ml-2 w-4 h-4"/></Button>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AssessmentWizard;