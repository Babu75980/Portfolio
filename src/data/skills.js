// icon: one or two keys from data/icons.js (+ custom "java" and "aws"). cat: filter group.
export const skillCats = ['All', 'Backend', 'Data & Messaging', 'Frontend', 'DevOps & Quality']
export const skills = [
  { icon: ['java'], name: 'Java 17', desc: 'Build robust backend services with modern Java, streams, records and concurrency.', n: 5, cat: 'Backend' },
  { icon: ['springboot'], name: 'Spring Boot', desc: 'Create production REST APIs with Spring MVC, Data JPA, Security and Swagger/OpenAPI.', n: 5, cat: 'Backend' },
  { icon: ['spring'], name: 'Spring Cloud', desc: 'Compose microservices with API Gateway, service discovery, config server and Resilience4j.', n: 5, cat: 'Backend' },
  { icon: ['springsecurity'], name: 'Spring Security', desc: 'Protect APIs with JWT, OAuth 2.0, RBAC and method-level authorization.', n: 5, cat: 'Backend' },
  { icon: ['kafka'], name: 'Apache Kafka', desc: 'Design event-driven communication with producers, consumers and async workflows.', n: 4, cat: 'Data & Messaging' },
  { icon: ['postgres'], name: 'PostgreSQL', desc: 'Model schema-based multi-tenancy, JSONB fields and optimized JPA and native queries.', n: 5, cat: 'Data & Messaging' },
  { icon: ['redis'], name: 'Redis & Redisson', desc: 'Speed up hot data with caching and prevent conflicting updates with distributed locks.', n: 4, cat: 'Data & Messaging' },
  { icon: ['angular'], name: 'Angular 18', desc: 'Build standalone components, RxJS data flows and role-based UIs with TypeScript.', n: 4, cat: 'Frontend' },
  { icon: ['react'], name: 'React', desc: 'Develop component-based interfaces with hooks and reusable UI patterns.', n: 3, cat: 'Frontend' },
  { icon: ['junit', 'postman'], name: 'Testing & Quality', desc: 'Ship with JUnit, Mockito, Postman and SonarQube quality gates.', n: 4, cat: 'DevOps & Quality' },
  { icon: ['aws', 'docker'], name: 'AWS & Docker', desc: 'Deploy and troubleshoot containerized apps across multiple environments.', n: 4, cat: 'DevOps & Quality' },
  { icon: ['jenkins'], name: 'Jenkins CI/CD', desc: 'Automate builds and releases with Maven, Jenkins and Git workflows.', n: 4, cat: 'DevOps & Quality' },
]
export const tech = ['Java', 'JavaScript', 'TypeScript', 'SQL', 'Spring Boot', 'Hibernate', 'Angular', 'RxJS', 'React', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Kafka', 'Docker', 'AWS', 'Jenkins', 'Maven', 'Git', 'Razorpay', 'FCM', 'Grafana', 'Splunk']
// display name -> icon key (names without an entry simply render without an icon)
export const alias = {
  'java': 'java', 'java 17': 'java', 'javascript': 'javascript', 'typescript': 'typescript',
  'spring boot': 'springboot', 'spring security': 'springsecurity', 'spring cloud': 'spring',
  'hibernate': 'hibernate', 'jpa': 'hibernate', 'angular': 'angular', 'angular 18': 'angular', 'react': 'react',
  'postgresql': 'postgres', 'postgresql (jsonb)': 'postgres', 'mysql': 'mysql', 'redis': 'redis', 'redisson': 'redis',
  'elasticsearch': 'elasticsearch', 'kafka': 'kafka', 'docker': 'docker', 'aws': 'aws', 'jenkins': 'jenkins',
  'maven': 'maven', 'git': 'git', 'razorpay': 'razorpay', 'fcm': 'firebase', 'grafana': 'grafana', 'splunk': 'splunk',
  'jwt': 'jwt', 'websockets': 'websocket', 'junit': 'junit', 'postman': 'postman', 'swagger': 'swagger',
}
