/* eslint-disable jsx-a11y/alt-text */
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { DATA } from '@/lib/data';

// Estilos básicos usando fontes padrão (Helvetica) para evitar erros de carregamento
const styles = StyleSheet.create({
  page: { padding: 30, fontFamily: 'Helvetica', fontSize: 11, lineHeight: 1.4, color: '#333' },
  header: { marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#ddd', paddingBottom: 10 },
  name: { fontSize: 24, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 4 },
  role: { fontSize: 12, color: '#666', marginBottom: 4 },
  contact: { fontSize: 10, color: '#444', marginBottom: 2 },
  section: { marginBottom: 15 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 8, backgroundColor: '#f3f4f6', paddingVertical: 4, paddingHorizontal: 4 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 },
  jobTitle: { fontSize: 11, fontWeight: 'bold' },
  company: { fontSize: 10, color: '#555', fontStyle: 'italic' },
  period: { fontSize: 10, color: '#666' },
  text: { fontSize: 10, textAlign: 'justify', marginBottom: 4 },
  bulletRow: { flexDirection: 'row', marginBottom: 2, paddingLeft: 5 },
  bullet: { width: 3, height: 3, backgroundColor: '#333', borderRadius: '50%', marginRight: 5, marginTop: 4 },
  skillsContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 5 },
  skillTag: { fontSize: 9, backgroundColor: '#e5e7eb', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 }
});

export const ResumeDocument = ({ phone }: { phone: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.name}>{DATA.profile.name}</Text>
        <Text style={styles.role}>{DATA.profile.role}</Text>
        <Text style={styles.contact}>
           {DATA.profile.location}  •  {DATA.profile.email}
        </Text>
        <Text style={styles.contact}>
           LinkedIn: {DATA.profile.linkedin.replace('https://www.', '')}  •  Tel: {phone}
        </Text>
      </View>

      {/* RESUMO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.text}>{DATA.about.bio}</Text>
      </View>

      {/* SKILLS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
        <View style={styles.skillsContainer}>
            {/* Combina as listas de skills, verificando se existem */}
            {[...(DATA.skills.hard || []), ...(DATA.skills.tools || [])].map((skill, i) => (
                <Text key={i} style={styles.skillTag}>{skill}</Text>
            ))}
        </View>
      </View>

      {/* EXPERIÊNCIA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        {DATA.experience.map((exp, i) => (
          <View key={i} wrap={false} style={{ marginBottom: 12 }}>
            <View style={styles.row}>
                <Text style={styles.jobTitle}>{exp.role}</Text>
                <Text style={styles.period}>{exp.period}</Text>
            </View>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.text}>{exp.description}</Text>
            
            {exp.achievements && exp.achievements.map((ach, j) => (
               <View key={j} style={styles.bulletRow}>
                   <View style={styles.bullet} />
                   <Text style={{ ...styles.text, flex: 1 }}>{ach}</Text>
               </View>
            ))}
          </View>
        ))}
      </View>

      {/* FORMAÇÃO ACADÊMICA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
        {DATA.education.map((edu, i) => (
           <View key={i} style={{ marginBottom: 6 }}>
              <View style={styles.row}>
                  <Text style={styles.jobTitle}>{edu.course}</Text>
                  <Text style={styles.period}>{edu.period}</Text>
              </View>
              <Text style={styles.company}>{edu.institution}</Text>
           </View>
        ))}
      </View>

      {/* CERTIFICAÇÕES */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certificações</Text>
        {DATA.certifications.map((cert, i) => (
           <View key={i} style={styles.row}>
              <Text style={{ ...styles.text, width: '80%' }}>• {cert.name}</Text>
              <Text style={styles.period}>{cert.date}</Text>
           </View>
        ))}
      </View>

    </Page>
  </Document>
);