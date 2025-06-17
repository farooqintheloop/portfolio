import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import Button from './ui/button';
import { Send, Loader2 } from 'lucide-react';

const LaunchAnnouncement = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [recipients, setRecipients] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const validateEmails = (emailList) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmails = emailList.filter(email => !emailRegex.test(email));
    return invalidEmails;
  };

  const handleSendAnnouncements = async () => {
    try {
      setIsLoading(true);

      // Split recipients by comma and trim whitespace
      const recipientList = recipients
        .split(',')
        .map(email => email.trim())
        .filter(email => email);

      if (recipientList.length === 0) {
        toast.error('Please enter at least one recipient email');
        return;
      }

      // Validate email formats
      const invalidEmails = validateEmails(recipientList);
      if (invalidEmails.length > 0) {
        toast.error(`Invalid email format: ${invalidEmails.join(', ')}`);
        return;
      }

      console.log('Sending to recipients:', recipientList);

      const response = await fetch('http://localhost:5000/api/send-launch-announcement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipients: recipientList }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || 'Failed to send announcements');
      }

      console.log('Server response:', data);
      toast.success('Launch announcements sent successfully!');
      setRecipients('');
    } catch (error) {
      console.error('Error sending announcements:', error);
      toast.error(error.message || 'Failed to send announcements');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
      <h2 className="text-2xl font-bold text-white mb-4">Send Launch Announcements</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="recipients" className="block text-sm font-medium text-gray-300 mb-2">
            Recipient Emails (comma-separated)
          </label>
          <textarea
            id="recipients"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            placeholder="email1@example.com, email2@example.com"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
          />
          <p className="mt-1 text-sm text-gray-400">
            Separate multiple email addresses with commas
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            onClick={handleSendAnnouncements}
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Announcements
              </>
            )}
          </Button>

          <Button
            onClick={() => setShowPreview(!showPreview)}
            variant="outline"
            className="border-gray-600 text-gray-300 hover:bg-gray-700"
          >
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </Button>
        </div>

        {showPreview && (
          <div className="mt-4 p-4 bg-gray-700 rounded-md">
            <h3 className="text-lg font-medium text-white mb-2">Email Preview</h3>
            <div className="text-sm text-gray-300">
              <p><strong>Subject:</strong> Portfolio Launch Announcement</p>
              <p><strong>Recipients:</strong> {recipients || 'No recipients added'}</p>
              <p className="mt-2">
                The email will include your portfolio link, social media links, and a professional announcement message.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LaunchAnnouncement; 