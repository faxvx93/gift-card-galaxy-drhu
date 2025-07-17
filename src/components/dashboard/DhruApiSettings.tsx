import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { dhruApi } from "@/services/dhruApi";
import { Settings, DollarSign, CheckCircle, XCircle } from "lucide-react";

export const DhruApiSettings = () => {
  const [baseUrl, setBaseUrl] = useState("");
  const [apiKey, setApiKey] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Load saved credentials from localStorage
    const savedUrl = localStorage.getItem('dhru_base_url');
    const savedToken = localStorage.getItem('dhru_api_token');
    
    if (savedUrl && savedToken) {
      setBaseUrl(savedUrl);
      setApiKey(savedToken);
      dhruApi.setCredentials(savedUrl, savedToken);
      testConnection(savedUrl, savedToken);
    }
  }, []);

  const testConnection = async (url?: string, key?: string) => {
    setIsLoading(true);
    try {
      dhruApi.setCredentials(url || baseUrl, key || apiKey);
      const balanceData = await dhruApi.getBalance();
      setBalance(balanceData.balance);
      setIsConnected(true);
      toast({
        title: "Success",
        description: "Connected to ZDDK API successfully",
      });
    } catch (error) {
      setIsConnected(false);
      setBalance(null);
      toast({
        title: "Connection Failed",
        description: "Failed to connect to ZDDK API. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSave = () => {
    if (!baseUrl || !apiKey) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('dhru_base_url', baseUrl);
    localStorage.setItem('dhru_api_token', apiKey);
    
    testConnection();
  };

  return (
    <Card className="gaming-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Settings className="w-5 h-5" />
          ZDDK API Configuration
        </CardTitle>
        <CardDescription>
          Configure your ZDDK API credentials to sync products
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="baseUrl">API Base URL</Label>
            <Input
              id="baseUrl"
              type="url"
              placeholder="https://api.x-stor.net"
              value={baseUrl}
              onChange={(e) => setBaseUrl(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="apiKey">API Token</Label>
            <Input
              id="apiKey"
              type="password"
              placeholder="Your API token"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center gap-2">
            <Badge variant={isConnected ? "default" : "destructive"} className="gap-1">
              {isConnected ? (
                <>
                  <CheckCircle className="w-3 h-3" />
                  Connected
                </>
              ) : (
                <>
                  <XCircle className="w-3 h-3" />
                  Disconnected
                </>
              )}
            </Badge>
            
            {balance !== null && (
              <Badge variant="outline" className="gap-1">
                <DollarSign className="w-3 h-3" />
                Balance: ${balance.toFixed(2)}
              </Badge>
            )}
          </div>
          
          <Button 
            onClick={handleSave} 
            disabled={isLoading}
            variant="gaming"
          >
            {isLoading ? "Testing..." : "Save & Test"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};