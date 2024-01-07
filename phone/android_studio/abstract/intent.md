# intent

### about

- intent is a messaging object that used to request an action from another component of the same systme, such as activities, services, or broadcast receivers.
- way to communicate between different parts of an application or between different applications on the device.
- refers to the purpose or goal behind communication. It's the reason why someone is conveying a message.

### Purposes

1. Starting Activites
2. Starting Services
3. Broadcasting Messages
4. Interacting with Content Providers

### Characters

- doesn't specify the exact component to start but defines the action to perform

### usecase

```
Intent intent = new Intent(Context, target);
```

- Context: Represents the context within which the Intent will be executed. In Android, the context provides access to resources, system services, etc. It could be Activity, Service, Application, or any Context object.

- target: Specifies the component that the Intent targets.