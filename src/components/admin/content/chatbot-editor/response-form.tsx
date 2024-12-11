import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface ResponseFormData {
  trigger: string;
  response: string;
  category: string;
  variables: string[];
  followUpQuestions: string[];
  conditions: Array<{
    variable: string;
    operator: string;
    value: string;
  }>;
}

export function ResponseForm() {
  const [formData, setFormData] = useState<ResponseFormData>({
    trigger: '',
    response: '',
    category: '',
    variables: [],
    followUpQuestions: [],
    conditions: [],
  });

  const categories = [
    'Booking Support',
    'Recommendations',
    'General Inquiries',
    'Technical Support',
    'Pricing',
    'Cancellations',
  ];

  const operators = ['equals', 'contains', 'greater_than', 'less_than'];

  const addVariable = () => {
    setFormData({
      ...formData,
      variables: [...formData.variables, ''],
    });
  };

  const removeVariable = (index: number) => {
    setFormData({
      ...formData,
      variables: formData.variables.filter((_, i) => i !== index),
    });
  };

  const addFollowUpQuestion = () => {
    setFormData({
      ...formData,
      followUpQuestions: [...formData.followUpQuestions, ''],
    });
  };

  const removeFollowUpQuestion = (index: number) => {
    setFormData({
      ...formData,
      followUpQuestions: formData.followUpQuestions.filter((_, i) => i !== index),
    });
  };

  const addCondition = () => {
    setFormData({
      ...formData,
      conditions: [
        ...formData.conditions,
        { variable: '', operator: 'equals', value: '' },
      ],
    });
  };

  const removeCondition = (index: number) => {
    setFormData({
      ...formData,
      conditions: formData.conditions.filter((_, i) => i !== index),
    });
  };

  return (
    <form className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-6">Response Configuration</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Trigger
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2.5"
              value={formData.trigger}
              onChange={(e) =>
                setFormData({ ...formData, trigger: e.target.value })
              }
              placeholder="e.g., booking_cancellation"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Response Template
            </label>
            <textarea
              className="w-full rounded-md border border-gray-300 p-2.5"
              rows={4}
              value={formData.response}
              onChange={(e) =>
                setFormData({ ...formData, response: e.target.value })
              }
              placeholder="Enter the response template..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              className="w-full rounded-md border border-gray-300 p-2.5"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Variables
            </label>
            <div className="space-y-4">
              {formData.variables.map((variable, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 rounded-md border border-gray-300 p-2.5"
                    value={variable}
                    onChange={(e) => {
                      const newVariables = [...formData.variables];
                      newVariables[index] = e.target.value;
                      setFormData({ ...formData, variables: newVariables });
                    }}
                    placeholder="Variable name"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeVariable(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addVariable}>
                Add Variable
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Follow-up Questions
            </label>
            <div className="space-y-4">
              {formData.followUpQuestions.map((question, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    className="flex-1 rounded-md border border-gray-300 p-2.5"
                    value={question}
                    onChange={(e) => {
                      const newQuestions = [...formData.followUpQuestions];
                      newQuestions[index] = e.target.value;
                      setFormData({
                        ...formData,
                        followUpQuestions: newQuestions,
                      });
                    }}
                    placeholder="Follow-up question"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeFollowUpQuestion(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={addFollowUpQuestion}
              >
                Add Follow-up Question
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Conditions
            </label>
            <div className="space-y-4">
              {formData.conditions.map((condition, index) => (
                <div key={index} className="flex gap-2">
                  <select
                    className="rounded-md border border-gray-300 p-2.5"
                    value={condition.variable}
                    onChange={(e) => {
                      const newConditions = [...formData.conditions];
                      newConditions[index] = {
                        ...condition,
                        variable: e.target.value,
                      };
                      setFormData({ ...formData, conditions: newConditions });
                    }}
                  >
                    <option value="">Select variable</option>
                    {formData.variables.map((variable) => (
                      <option key={variable} value={variable}>
                        {variable}
                      </option>
                    ))}
                  </select>
                  <select
                    className="rounded-md border border-gray-300 p-2.5"
                    value={condition.operator}
                    onChange={(e) => {
                      const newConditions = [...formData.conditions];
                      newConditions[index] = {
                        ...condition,
                        operator: e.target.value,
                      };
                      setFormData({ ...formData, conditions: newConditions });
                    }}
                  >
                    {operators.map((operator) => (
                      <option key={operator} value={operator}>
                        {operator.replace('_', ' ')}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    className="flex-1 rounded-md border border-gray-300 p-2.5"
                    value={condition.value}
                    onChange={(e) => {
                      const newConditions = [...formData.conditions];
                      newConditions[index] = {
                        ...condition,
                        value: e.target.value,
                      };
                      setFormData({ ...formData, conditions: newConditions });
                    }}
                    placeholder="Value"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeCondition(index)}
                  >
                    Remove
                  </Button>
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addCondition}>
                Add Condition
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Test Response
        </Button>
        <Button type=" submit">Save Response</Button>
      </div>
    </form>
  );
}