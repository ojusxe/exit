import { NextResponse } from 'next/server'

// Simple API routes for RupeeBee showcase website
export async function GET(request, { params }) {
  const path = params?.path || []
  const endpoint = path.join('/')

  try {
    switch (endpoint) {
      case 'stats':
        // Return app statistics
        return NextResponse.json({
          usersProtected: 50000,
          calculationsPerformed: 250000,
          fraudPrevented: 1200,
          modulesCompleted: 75000,
          appRating: 4.8,
          totalDownloads: 100000
        })

      case 'features':
        // Return app features
        return NextResponse.json({
          features: [
            {
              id: 'learn',
              name: 'Learn',
              description: 'Interactive financial literacy modules in multiple languages',
              icon: 'graduation-cap',
              modules: 10,
              languages: ['Hindi', 'English', 'Punjabi']
            },
            {
              id: 'shield',
              name: 'Shield',
              description: 'Advanced fraud detection and security training',
              icon: 'shield',
              securityChecks: 87,
              fraudTypesDetected: 15
            },
            {
              id: 'calculator',
              name: 'Calculator',
              description: 'Comprehensive financial planning tools',
              icon: 'calculator',
              calculatorTypes: ['EMI', 'SIP', 'FD', 'Home Loan', 'Gold Price', 'Retirement', 'Goal Setting', 'Compound Interest']
            },
            {
              id: 'sarathi',
              name: 'Sarathi',
              description: 'AI-powered financial assistant',
              icon: 'bot',
              availability: '24/7',
              languages: ['Hindi', 'English', 'Punjabi'],
              compliance: ['RBI', 'NPCI']
            },
            {
              id: 'quest',
              name: 'Quest',
              description: 'Gamified learning with rewards',
              icon: 'trophy',
              quizzes: 50,
              achievements: 25,
              leaderboards: true
            }
          ]
        })

      case 'security':
        // Return security information
        return NextResponse.json({
          securityMeasures: [
            'End-to-end encryption',
            'Biometric authentication',
            'Real-time fraud detection',
            'Regular security audits',
            'RBI compliance',
            'NPCI guidelines adherence'
          ],
          certifications: ['ISO 27001', 'PCI DSS', 'SOC 2'],
          fraudTypesDetected: [
            'Phishing calls',
            'Fake banking apps',
            'SMS scams',
            'UPI fraud',
            'Identity theft',
            'Investment scams'
          ]
        })

      case 'testimonials':
        // Return user testimonials (placeholder data)
        return NextResponse.json({
          testimonials: [
            {
              id: 1,
              name: 'Rajesh Kumar',
              location: 'Delhi',
              rating: 5,
              comment: 'RupeeBee helped me identify a fake loan app scam. The security training is excellent!',
              module: 'Shield'
            },
            {
              id: 2,
              name: 'Priya Sharma',
              location: 'Mumbai',
              rating: 5,
              comment: 'The financial calculators are so helpful for planning my investments. Highly recommended!',
              module: 'Calculator'
            },
            {
              id: 3,
              name: 'Amit Singh',
              location: 'Pune',
              rating: 4,
              comment: 'Learning modules are easy to understand. Finally, financial education in simple Hindi!',
              module: 'Learn'
            }
          ]
        })

      case 'download-links':
        // Return app download information
        return NextResponse.json({
          android: {
            playStore: 'https://play.google.com/store/apps/details?id=com.psb.rupeebee',
            directDownload: '/downloads/rupeebee-android.apk',
            version: '2.1.0',
            size: '45 MB',
            requirements: 'Android 6.0 and up'
          },
          ios: {
            appStore: 'https://apps.apple.com/app/rupeebee/id123456789',
            version: '2.1.0',
            size: '42 MB',
            requirements: 'iOS 12.0 and up'
          },
          qrCodes: {
            android: '/images/qr-android.png',
            ios: '/images/qr-ios.png'
          }
        })

      default:
        return NextResponse.json(
          { error: 'Endpoint not found', available_endpoints: ['stats', 'features', 'security', 'testimonials', 'download-links'] },
          { status: 404 }
        )
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Handle POST requests for contact forms, newsletter signup, etc.
export async function POST(request, { params }) {
  const path = params?.path || []
  const endpoint = path.join('/')

  try {
    const body = await request.json()

    switch (endpoint) {
      case 'contact':
        // Handle contact form submission
        console.log('Contact form submission:', body)
        return NextResponse.json({ 
          success: true, 
          message: 'Thank you for your message. We will get back to you soon!' 
        })

      case 'newsletter':
        // Handle newsletter signup
        console.log('Newsletter signup:', body)
        return NextResponse.json({ 
          success: true, 
          message: 'Successfully subscribed to RupeeBee updates!' 
        })

      case 'feedback':
        // Handle app feedback
        console.log('App feedback:', body)
        return NextResponse.json({ 
          success: true, 
          message: 'Thank you for your feedback!' 
        })

      default:
        return NextResponse.json(
          { error: 'POST endpoint not found' },
          { status: 404 }
        )
    }
  } catch (error) {
    console.error('POST API Error:', error)
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    )
  }
}