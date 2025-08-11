'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Shield, 
  Calculator, 
  GraduationCap, 
  Bot, 
  Trophy,
  Star,
  Download,
  Users,
  TrendingUp,
  Lock,
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export default function App() {
  const [stats, setStats] = useState({
    usersProtected: 0,
    calculationsPerformed: 0,
    fraudPrevented: 0,
    modulesCompleted: 0
  })

  useEffect(() => {
    // Animate stats counter
    const targetStats = {
      usersProtected: 50000,
      calculationsPerformed: 250000,
      fraudPrevented: 1200,
      modulesCompleted: 75000
    }

    const duration = 2000 // 2 seconds
    const steps = 50
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setStats({
        usersProtected: Math.floor(targetStats.usersProtected * progress),
        calculationsPerformed: Math.floor(targetStats.calculationsPerformed * progress),
        fraudPrevented: Math.floor(targetStats.fraudPrevented * progress),
        modulesCompleted: Math.floor(targetStats.modulesCompleted * progress)
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setStats(targetStats)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const features = [
    {
      icon: GraduationCap,
      title: "Learn",
      description: "Interactive financial literacy modules in Hindi, English & Punjabi",
      color: "bg-blue-500",
      stats: "10+ Modules"
    },
    {
      icon: Shield,
      title: "Shield",
      description: "Advanced fraud detection and security training",
      color: "bg-red-500",
      stats: "87-Point Security Check"
    },
    {
      icon: Calculator,
      title: "Calculator",
      description: "EMI, SIP, FD and other financial planning tools",
      color: "bg-green-500",
      stats: "8+ Calculators"
    },
    {
      icon: Bot,
      title: "Sarathi",
      description: "AI-powered financial assistant available 24/7",
      color: "bg-purple-500",
      stats: "24/7 Support"
    },
    {
      icon: Trophy,
      title: "Quest",
      description: "Gamified learning with quizzes and achievements",
      color: "bg-yellow-500",
      stats: "50+ Challenges"
    }
  ]

  const trustIndicators = [
    { label: "Users Protected", value: stats.usersProtected.toLocaleString() + "+" },
    { label: "Calculations Performed", value: stats.calculationsPerformed.toLocaleString() + "+" },
    { label: "Fraud Attempts Blocked", value: stats.fraudPrevented.toLocaleString() + "+" },
    { label: "Learning Modules Completed", value: stats.modulesCompleted.toLocaleString() + "+" }
  ]

  const securityFeatures = [
    "Real-time fraud detection",
    "Secure biometric authentication", 
    "RBI & NPCI compliant",
    "End-to-end encryption",
    "Regular security updates",
    "Privacy-first approach"
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🐝</span>
            </div>
            <span className="font-heading font-bold text-xl text-primary">RupeeBee</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
            <a href="#security" className="text-muted-foreground hover:text-primary transition-colors">Security</a>
            <a href="#stats" className="text-muted-foreground hover:text-primary transition-colors">Impact</a>
            <Button variant="default" className="bg-primary hover:bg-primary/90">
              Download App
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-16 hero-gradient text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
            Powered by Punjab & Sind Bank
          </Badge>
          
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6">
            Financial Literacy &<br />
            <span className="text-accent">Fraud Protection</span><br />
            for India
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Empower yourself with financial knowledge, protect against fraud, and make informed decisions with our comprehensive mobile app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Download for Android
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Smartphone className="mr-2 h-5 w-5" />
              View Features
            </Button>
          </div>

          <Badge variant="secondary" className="bg-accent text-accent-foreground font-semibold px-4 py-2">
            🇮🇳 Made for India, Made in India
          </Badge>
        </div>

        {/* App Mockup */}
        <div className="container mx-auto px-4 pb-20 relative z-10">
          <div className="max-w-md mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1588858865445-03381e156752?w=400&h=600&fit=crop" 
              alt="RupeeBee App Preview" 
              className="w-full rounded-3xl shadow-2xl animate-float"
            />
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl animate-float">🐝</div>
          <div className="absolute top-40 right-20 text-4xl animate-float" style={{animationDelay: '1s'}}>💰</div>
          <div className="absolute bottom-40 left-20 text-5xl animate-float" style={{animationDelay: '2s'}}>🛡️</div>
          <div className="absolute bottom-20 right-10 text-3xl animate-float" style={{animationDelay: '0.5s'}}>📱</div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustIndicators.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="pt-6">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              5 Powerful Modules in One App
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for financial literacy, security, and smart money management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 ${feature.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
                    <Badge variant="outline" className="mx-auto w-fit">
                      {feature.stats}
                    </Badge>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <Button variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-white transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
                Bank-Grade Security & Fraud Protection
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Stay protected with our advanced security features and comprehensive fraud detection system trusted by thousands of users.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {securityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <Shield className="mr-2 h-5 w-5" />
                Check Your Security Score
              </Button>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9784235/pexels-photo-9784235.jpeg?w=500&h=600&fit=crop" 
                alt="Security Features" 
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
              Experience RupeeBee in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our app is helping Indians build financial literacy and stay protected from fraud
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Star className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-2">Interactive Learning</h3>
                  <p className="text-muted-foreground">
                    Master financial concepts through engaging modules and real-world scenarios.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Lock className="h-8 w-8 text-red-500 mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-2">Fraud Detection</h3>
                  <p className="text-muted-foreground">
                    Stay one step ahead of scammers with our comprehensive security training.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/6289058/pexels-photo-6289058.jpeg?w=400&h=600&fit=crop" 
                alt="Financial Planning" 
                className="w-full max-w-sm mx-auto rounded-3xl shadow-2xl"
              />
            </div>

            <div className="space-y-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <TrendingUp className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-2">Smart Calculators</h3>
                  <p className="text-muted-foreground">
                    Plan your investments and loans with precision using our advanced tools.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="font-heading font-bold text-xl mb-2">Community Support</h3>
                  <p className="text-muted-foreground">
                    Join thousands of users on their journey to financial independence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            Ready to Transform Your Financial Journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of Indians who are already using RupeeBee to build financial literacy and stay protected from fraud.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Download from Google Play
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
              <Smartphone className="mr-2 h-5 w-5" />
              Download from App Store
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">4.8⭐</div>
              <div className="text-white/80">App Store Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-white/80">Free to Use</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🐝</span>
                </div>
                <span className="font-heading font-bold text-xl text-primary">RupeeBee</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your trusted companion for financial literacy and fraud protection. Powered by Punjab & Sind Bank, made for India.
              </p>
              <Badge variant="outline" className="text-primary border-primary">
                🏦 Punjab & Sind Bank Official Partner
              </Badge>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Financial Learning</li>
                <li>Fraud Protection</li>
                <li>Smart Calculators</li>
                <li>AI Assistant</li>
                <li>Gamified Quests</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Help Center</li>
                <li>Security Guide</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 RupeeBee by Punjab & Sind Bank. All rights reserved. Made with ❤️ for India.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}