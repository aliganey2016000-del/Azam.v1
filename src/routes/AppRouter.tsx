import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { PublicLayout } from '../layouts/PublicLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute } from './ProtectedRoute';

import { LandingPage } from '../pages/LandingPage';
import { VerifyCertificatePage } from '../pages/VerifyCertificatePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';

import { DashboardPage } from '../pages/DashboardPage';
import { ApplicationsPage } from '../pages/ApplicationsPage';
import { PlacementsPage } from '../pages/PlacementsPage';
import { AttendancePage } from '../pages/AttendancePage';
import { LogbookPage } from '../pages/LogbookPage';
import { EvaluationsPage } from '../pages/EvaluationsPage';
import { CertificatesPage } from '../pages/CertificatesPage';

// University Dedicated Portal Pages
import { UniversityMouPage } from '../pages/university/UniversityMouPage';
import { UniversityStudentsTrackingPage } from '../pages/university/UniversityStudentsTrackingPage';
import { UniversityFinancialsPage } from '../pages/university/UniversityFinancialsPage';

// Admin Management Pages (Seamlessly unified in DashboardLayout)
import { UsersManagementPage } from '../pages/admin/UsersManagementPage';
import { UniversitiesPage } from '../pages/admin/UniversitiesPage';
import { UniversityDetailPage } from '../pages/admin/UniversityDetailPage';
import { OrganizationsPage } from '../pages/admin/OrganizationsPage';
import { OrganizationDetailPage } from '../pages/admin/OrganizationDetailPage';
import { SupervisorsPage } from '../pages/admin/SupervisorsPage';
import { SupervisorDetailPage } from '../pages/admin/SupervisorDetailPage';
import { AuditLogsPage } from '../pages/admin/AuditLogsPage';

export const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/verify-certificate" element={<VerifyCertificatePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected Unified Portal Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/dashboard/applications" element={<ApplicationsPage />} />
            <Route path="/dashboard/placements" element={<PlacementsPage />} />
            <Route path="/dashboard/attendance" element={<AttendancePage />} />
            <Route path="/dashboard/logbooks" element={<LogbookPage />} />
            <Route path="/dashboard/evaluations" element={<EvaluationsPage />} />
            <Route path="/dashboard/certificates" element={<CertificatesPage />} />

            {/* Dedicated University Portal Routes */}
            <Route path="/university/mou" element={<UniversityMouPage />} />
            <Route path="/university/students" element={<UniversityStudentsTrackingPage />} />
            <Route path="/university/financials" element={<UniversityFinancialsPage />} />

            {/* Admin Management (Same unified sidebar & layout) */}
            <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
            <Route path="/admin/users" element={<UsersManagementPage />} />
            <Route path="/admin/universities" element={<UniversitiesPage />} />
            <Route path="/admin/universities/:id" element={<UniversityDetailPage />} />
            <Route path="/admin/organizations" element={<OrganizationsPage />} />
            <Route path="/admin/organizations/:id" element={<OrganizationDetailPage />} />
            <Route path="/admin/supervisors" element={<SupervisorsPage />} />
            <Route path="/admin/supervisors/:id" element={<SupervisorDetailPage />} />
            <Route path="/admin/audit-logs" element={<AuditLogsPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
