import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Sentry from '@sentry/react-native';

// Initialize Sentry
Sentry.init({
  dsn: 'https://bf4d8c8e0e94b9be564c80976f9064e0@o4508986514341888.ingest.de.sentry.io/4508986520633424', // Replace with your DSN
  tracesSampleRate: 1.0, // Capture all transactions (adjust for production)
  enableAutoSessionTracking: true, // Track app sessions
  sendDefaultPii: true, // Send Personally Identifiable Information (PII)
});

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      console.log(`Count incremented to: ${newCount}`);
      if (newCount > 5) {
        throw new Error('Count exceeded maximum value of 5!');
      }
      return newCount;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Count: {count}</Text>
      <Button title="Increment" onPress={handleIncrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
});

export default Sentry.wrap(App); // Wrap for automatic error reporting